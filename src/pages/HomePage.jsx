import Drop from '../components/drop/Drop';
import Lista from '../components/lista/Lista';
import useImages from '../hooks/useImages';

const HomePage = () => {
	const { uploads } = useImages();
	return (
		<>
			<Drop />
			<Lista />
			{uploads.length > 0 &&
				uploads.map((image) => (
					<img key={image.id} src={image.url} alt={image.fileName} />
				))}
		</>
	);
};

export default HomePage;
