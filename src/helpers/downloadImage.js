/**
 * Funci+on para descargar la imagen
 * @param {string} url
 * @param {string} name
 * @return {Promise<void>} void
 */
const downloadImage = async (url, name) => {
	// Descargar la imagen
	const link = document.createElement('a');
	link.href = url;
	link.download = name;
	link.click();

	// Eliminar el elemento
	return await link.remove();
};

export default downloadImage;
