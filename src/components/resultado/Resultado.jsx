import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useImages from '../../hooks/useImages';
import Item from '../lista/Item';
import ButtonLoader from '../botones/ButtonLoader';
import { BsDownload } from 'react-icons/bs';
import { AiOutlineFileZip } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';
import { GrDocumentImage } from 'react-icons/gr';
import { FaRedo } from 'react-icons/fa';
import './resultado.css';

const Resultado = () => {
	// Estados
	const [desabilitar, setDesabilitar] = useState(false);

	// useImages
	const {
		uploads,
		downloadImages,
		download,
		downloadZip,
		downloadComprimido,
		reset,
		rehacerImages,
	} = useImages();

	// Efecto
	useEffect(() => {
		// Si estamos en en navegador de chrome desabilitar el boton de descarga
		if (navigator.userAgent.indexOf('Chrome') !== -1 && uploads.length >= 11) {
			setDesabilitar(true);
		}
	}, [uploads]);

	return (
		<section className='container resultado'>
			<div className='resultado__container'>
				{uploads.length > 0 ? (
					<>
						<h1 className='titulo-top'>
							Downloads <span>({uploads.length})</span>
						</h1>
						<div className='lista__contenedor scroll-1'>
							{uploads.map((image) => (
								<Item key={image.id} image={image} eliminar={false} />
							))}
						</div>

						<div className='resultado__botones'>
							<Link
								to={'/'}
								className='btn_primary btn_primary--padding'
								onClick={reset}
							>
								<GrDocumentImage />
								Convertir otros archivos
							</Link>
							<Link
								to={'/'}
								className='btn_primary btn_primary--padding'
								onClick={rehacerImages}
							>
								<FaRedo />
								Rehacer
							</Link>
							{!desabilitar && (
								<ButtonLoader disabled={download} onClick={downloadImages}>
									{download ? (
										<>
											<BiLoaderCircle className='svg-rotar-loader' />{' '}
											Descargando...
										</>
									) : (
										<>
											<BsDownload /> Descargar Todos
										</>
									)}
								</ButtonLoader>
							)}
							<ButtonLoader disabled={downloadZip} onClick={downloadComprimido}>
								{downloadZip ? (
									<>
										<BiLoaderCircle className='svg-rotar-loader' />{' '}
										Descargando...
									</>
								) : (
									<>
										<AiOutlineFileZip /> Descargar archivo comprimido
									</>
								)}
							</ButtonLoader>
						</div>
					</>
				) : (
					<div className='resultado__ups'>
						<p>No hay archivos para descargar</p>
						<div></div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Resultado;
