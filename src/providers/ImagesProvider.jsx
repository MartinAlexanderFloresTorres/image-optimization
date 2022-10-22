import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImagesContext from '../contexts/ImagesContext';
import postUploads from '../api/postUploads';
import downloadImage from '../helpers/downloadImage';
import zip from 'jszip';
import toast from 'react-hot-toast';

const defaulState = {
	quality: 80,
	width: '',
	height: '',
	resize: 'cover',
	mimeType: 'webp',
};

let contador = 0;

const ImagesProvider = ({ children }) => {
	// Estado de las imagenes
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [download, setDownload] = useState(false);
	const [downloadZip, setDownloadZip] = useState(false);
	const [uploads, setUploads] = useState([]);
	const [error, setError] = useState(false);

	// Estados
	const [ajuste, setAjuste] = useState(defaulState);

	// useNavigate
	const navigate = useNavigate();

	// Agregar una imagen
	const addImage = (image) => {
		contador += 1;

		// Si sobrepasa 100 imagenes
		if (images.length > 100 || contador > 100) {
			setError(true);
			return;
		}

		// Agregar la imagen al estado
		setImages((images) => [...images, image]);
	};

	// Efecto del error
	useEffect(() => {
		if (error) {
			setError(false);
			toast.error('Solo puedes subir maximo 100 imagenes');
		}
	}, [error]);

	// Resertear todo
	const reset = () => {
		setImages([]);
		setUploads([]);
		setAjuste(defaulState);
		setError(false);
		contador = 0;
	};

	// Limpiar los uploads
	const clearUploads = () => {
		setUploads([]);
	};

	// Rehacer
	const rehacerImages = () => {
		setUploads([]);
	};

	// quitar una imagen
	const removeImage = (id) => {
		setImages(images.filter((image) => image.id !== id));
	};

	// llenar la configuracion
	const handleConfig = (e) => {
		const { name, value } = e.target;
		setAjuste({ ...ajuste, [name]: value });
	};

	// Subir las imagenes
	const uploadImages = async () => {
		const formData = new FormData();
		images.forEach((image) => {
			formData.append('file', image);
		});

		try {
			setLoading(true);
			const { data } = await postUploads(formData, ajuste);
			// Recorrer las imagenes
			data.forEach(async (image) => {
				const { id, fileName, url } = image;

				// Obtener el peso de la imagen
				const blob = await fetch(url).then((res) => res.blob());

				// Generar url para visualizar la imagen
				const imageUrl = URL.createObjectURL(blob);

				// Agregar la imagen al array
				setUploads((uploads) => [
					...uploads,
					{ id, url: imageUrl, size: blob.size, name: fileName },
				]);
			});
			navigate('/downloads');
		} catch (error) {
			console.log(error.message);
		}
		// Resetear el estado
		setLoading(false);
	};

	// descargar las imagenes
	const downloadImages = async () => {
		// Activar el estado de descarga
		setDownload(true);

		// Recorrer las imagenes
		uploads.forEach(async (image) => {
			const { url, name } = image;

			// Descargar la imagen
			await downloadImage(url, name);

			// Desactivar el estado de descarga
			if (uploads.length === uploads.indexOf(image) + 1) {
				setDownload(false);
			}
		});
	};

	// Descargar en zip
	const downloadComprimido = async () => {
		// Activar el estado de descarga
		setDownloadZip(true);

		// Crear el zip
		const zipFile = new zip();

		// Recorrer las imagenes
		uploads.forEach(async (image) => {
			const { url, name } = image;

			// Descargar la imagen
			const blob = await fetch(url).then((res) => res.blob());

			// Agregar la imagen al zip
			zipFile.file(name, blob);

			// Descargar el zip
			if (uploads.length === uploads.indexOf(image) + 1) {
				// Desactivar el estado de descarga
				setDownloadZip(false);
				// generar el zip
				zipFile.generateAsync({ type: 'blob' }).then((content) => {
					// Descargar el zip
					downloadImage(URL.createObjectURL(content), 'images.zip');
				});
			}
		});
	};
	return (
		<ImagesContext.Provider
			value={{
				addImage,
				removeImage,
				images,
				uploadImages,
				uploads,
				handleConfig,
				ajuste,
				loading,
				download,
				downloadImages,
				downloadZip,
				downloadComprimido,
				rehacerImages,
				reset,
				clearUploads,
			}}
		>
			{children}
		</ImagesContext.Provider>
	);
};

export default ImagesProvider;
