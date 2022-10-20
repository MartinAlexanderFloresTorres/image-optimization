/**
 * Funci+on para descargar la imagen
 * @param {string} url
 * @param {string} name
 */
const download = (url, name) => {
	const a = document.createElement('a');
	a.href = url;
	a.download = name;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};

export default download;
