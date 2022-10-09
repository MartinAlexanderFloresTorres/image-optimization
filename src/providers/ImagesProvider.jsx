import { useState } from 'react';
import ImagesContext from '../contexts/ImagesContext';

const ImagesProvider = ({ children }) => {
	// Estado de las imagenes
	const [images, setImages] = useState([]);

	// Agregar una imagen
	const addImage = (image) => {
		setImages([...images, image]);
	};

	// Limpiar las imagenes
	const clearImages = () => {
		setImages([]);
	};
	return (
		<ImagesContext.Provider
			value={{
				addImage,
				clearImages,
			}}
		>
			{children}
		</ImagesContext.Provider>
	);
};

export default ImagesProvider;
