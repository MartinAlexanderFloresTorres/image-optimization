/**
 * Funcion que formatea los kb
 * @param {number} size
 * @return {string} string
 */

const formatearSize = (size) => {
	// Formatear en KB
	const kb = size / 1000;
	// Formatear en MB
	const mb = kb / 1000;
	// Formatear en GB
	const gb = mb / 1000;

	// Si es menor a 1 MB
	if (kb < 1000) {
		return `${kb.toFixed(2)} KB`;
	}

	// Si es menor a 1 GB
	if (mb < 1000) {
		return `${mb.toFixed(2)} MB`;
	}

	// Si es mayor a 1 GB
	return `${gb.toFixed(2)} GB`;
};

export default formatearSize;
