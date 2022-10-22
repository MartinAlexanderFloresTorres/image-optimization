import { useEffect } from 'react';
import Drop from '../components/drop/Drop';
import Lista from '../components/lista/Lista';
import useImages from '../hooks/useImages';

const HomePage = () => {
	// useImages
	const { clearUploads } = useImages();

	useEffect(() => {
		clearUploads();
	}, []);
	return (
		<>
			<Drop />
			<Lista />
		</>
	);
};

export default HomePage;
