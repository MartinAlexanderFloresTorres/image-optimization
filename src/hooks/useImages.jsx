import { useContext } from 'react';
import ImagesContext from '../contexts/ImagesContext';

const useImages = () => {
	return useContext(ImagesContext);
};

export default useImages;
