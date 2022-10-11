/**
 * Funcion que formatea los kb
 * @param {number} kb
 * @return {string} string
 */

const formatearKb = (kb) => {
	const kbEnMb = kb / 1024;
	return kbEnMb.toFixed(2);
};

export default formatearKb;
