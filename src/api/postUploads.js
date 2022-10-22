import clienteAxios from '../config/ClienteAxios';

const postUploads = async (files, ajuste) => {
	const { width, height, resize, mimeType, quality } = ajuste;
	return await clienteAxios.post(
		`/uploads?width=${width}&height=${height}&resize=${resize}&mimeType=${mimeType}&quality=${quality}`,
		files,
		{
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		}
	);
};

export default postUploads;
