import useImages from '../../hooks/useImages';
import ButtonLoader from '../botones/ButtonLoader';
import Ajustes from '../ajustes/Ajustes';
import Item from './Item';
import { BiLoaderCircle } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import { AiOutlineClear } from 'react-icons/ai';
import './lista.css';

const Lista = () => {
	// useImagenes
	const { images, loading, uploadImages, reset } = useImages();

	return (
		<section className='container'>
			{images.length > 0 && (
				<section className='lista'>
					<div className='encabezado'>
						<h2 className='titulo-top'>
							Imagenes <span>({images.length})</span>
						</h2>
						<button className='btn__error' onClick={reset}>
							<AiOutlineClear />
							Limpiar lista
						</button>
					</div>

					<div className='lista__contenedor scroll-1'>
						{images.map((image) => (
							<Item key={image.id} image={image} eliminar={true} />
						))}
					</div>

					<ButtonLoader disabled={loading} onClick={uploadImages}>
						{loading ? (
							<>
								<BiLoaderCircle className='svg-rotar-loader' /> Procesando...
							</>
						) : (
							<>
								Empezar <BsChevronRight />
							</>
						)}
					</ButtonLoader>

					<Ajustes />

					<ButtonLoader disabled={loading} onClick={uploadImages}>
						{loading ? (
							<>
								<BiLoaderCircle className='svg-rotar-loader' /> Procesando...
							</>
						) : (
							<>
								Empezar <BsChevronRight />
							</>
						)}
					</ButtonLoader>
				</section>
			)}
		</section>
	);
};

export default Lista;
