import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import formatearSize from '../../helpers/formatearSize';
import useImages from '../../hooks/useImages';
import { MdClose } from 'react-icons/md';
import { FaDownload } from 'react-icons/fa';
import downloadImage from '../../helpers/downloadImage';
import { BsCheckCircle } from 'react-icons/bs';
import './item.css';

const Item = ({ image, eliminar }) => {
	const { id, name, url, size } = image;
	// useImages
	const { removeImage } = useImages();

	// si hay imagenes formato avif
	const disabledAvif = name.includes('.avif');
	return (
		<article className='item'>
			<div className='item__preview'>
				<img src={url} alt={name} width={100} height={100} />
			</div>

			<a
				href={url}
				target='_blank'
				title={disabledAvif ? 'No disponible' : 'Visualizar'}
				onClick={(e) => {
					// si es imagen avif no abrir en otra pestaña
					if (disabledAvif) e.preventDefault();
				}}
			>
				<div className='item__box'>
					<div className='d-flex item__left'>
						<img src={url} alt={name} width={100} height={100} />
						<span className='item__titulo' title={name}>
							{name}
						</span>
					</div>

					<span className='item__peso' title={formatearSize(size)}>
						{formatearSize(size)}
					</span>
				</div>
			</a>

			<div className='item__botones'>
				{eliminar ? (
					<>
						<span title='Cargado' className='d-flex'>
							<BsCheckCircle />
						</span>

						<button
							className='d-flex p-item btn-border item__btn-eliminar'
							title='Quitar imagen'
							onClick={() => removeImage(id)}
						>
							<MdClose />
						</button>
					</>
				) : (
					<>
						<button
							className='d-flex p-item  btn-border item__btn-descargar'
							title='Descargar imagen'
							onClick={() => downloadImage(url, name)}
						>
							<FaDownload />
						</button>

						<a
							href={url}
							target='_blank'
							className='d-flex p-item btn-border item__btn-ver'
							title={disabledAvif ? 'No disponible' : 'Visualizar'}
							onClick={(e) => {
								// si es imagen avif no abrir en otra pestaña
								if (disabledAvif) e.preventDefault();
							}}
						>
							{disabledAvif ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
						</a>
					</>
				)}
			</div>

			<div className='item__loader'></div>
		</article>
	);
};

export default Item;
