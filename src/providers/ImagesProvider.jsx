import { useState } from 'react';
import ImagesContext from '../contexts/ImagesContext';

const ImagesProvider = ({ children }) => {
	// Estado de las imagenes
	const [images, setImages] = useState([]);

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
	return (
		<ImagesContext.Provider
			value={{
				addImage,
				clearImages,
				removeImage,
				images,
			}}
		>
			{children}
		</ImagesContext.Provider>
	);
};

export default ImagesProvider;
