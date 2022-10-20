import { useState } from 'react';
import postUploads from '../api/postUploads';
import ImagesContext from '../contexts/ImagesContext';
import { useNavigate } from 'react-router-dom';

const defaulState = {
	quality: 80,
	width: '',
	height: '',
	resize: 'cover',
	mimeType: 'webp',
};

const ImagesProvider = ({ children }) => {
	// Estado de las imagenes
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [uploads, setUploads] = useState([]);
	// Estados
	const [ajuste, setAjuste] = useState(defaulState);

	// useNavigate
	const navigate = useNavigate();

	// Agregar una imagen
	const addImage = (image) => {
		setImages((images) => [...images, image]);
	};

	// Limpiar las imagenes
	const clearImages = () => {
		setImages([]);
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

				// Agregar la imagen al array
				setUploads((uploads) => [...uploads, { url, id, fileName }]);
			});
			console.log(data);
			navigate('/downloads');
		} catch (error) {
			console.log(error.message);
		}
		setLoading(false);
	};
	return (
		<ImagesContext.Provider
			value={{
				addImage,
				clearImages,
				removeImage,
				images,
				uploadImages,
				uploads,
				handleConfig,
				ajuste,
				loading,
			}}
		>
			{children}
		</ImagesContext.Provider>
	);
};

export default ImagesProvider;
