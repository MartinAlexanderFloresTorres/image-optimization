import formatearKb from '../../helpers/formatearKb';
import useImages from '../../hooks/useImages';
import './item.css';

const Item = ({ image }) => {
	const { id, name, url, size } = image;
	// useImages
	const { removeImage } = useImages();

	return (
		<div className='item'>
			<a href={url} target='_blank' title='Visualizar'>
				<div className='item__box'>
					<div className='d-flex item__left'>
						<img src={url} alt={name} width={100} />
						<span className='item__titulo' title={name}>
							{name}
						</span>
					</div>

					<span className='item__peso' title={`${formatearKb(size)} KB`}>
						{formatearKb(size)} KB
					</span>
				</div>
			</a>

			<div className='item__botones'>
				<span title='Subido' className='d-flex'>
					<svg
						className='item__iconUpload'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
						/>
					</svg>
				</span>
				<button
					className='d-flex p-item'
					title='Quitar imagen'
					onClick={() => removeImage(id)}
				>
					<svg
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>
			</div>

			<div className='item__loader'></div>
		</div>
	);
};

export default Item;
