import useImages from '../../hooks/useImages';
import AjusteDepegable from './AjusteDepegable';
import './ajustes.css';

const Ajustes = () => {
	// useImagenes
	const { handleConfig, ajuste } = useImages();

	return (
		<section className='ajustes'>
			<div className='ajustes-card'>
				<h2 className='d-flex'>
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
							d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
						/>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
						/>
					</svg>
					<span>Ajustes opcionales</span>
				</h2>
			</div>

			<AjusteDepegable
				className={'ajustes-item'}
				titulo={'Calidad'}
				svg={
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
							d='M13 10V3L4 14h7v7l9-11h-7z'
						/>
					</svg>
				}
			>
				<div className='card'>
					<p className='calidad__parrafo'>
						Decide qué calidad debe tener la imagen resultante. A mejor calidad,
						mayor tamaño de archivo. Una calidad menor reducirá el tamaño de
						archivo.
					</p>
					<div className='calidad__indices'>
						<span>
							<span className='calidad__hidden'>Calidad</span> mala
						</span>
						<span>
							<span className='calidad__hidden'>Calidad</span> óptima
						</span>
						<span>
							<span className='calidad__hidden'>Calidad</span> completa
						</span>
					</div>
					<input
						name='quality'
						type='range'
						min='0'
						max='100'
						step='10'
						value={ajuste.quality}
						onChange={handleConfig}
						title='selecciona la calidad de imagen'
						className='calidad__range'
					/>

					<div className='calidad__indicadores'>
						<p>0%</p>
						<p></p>{' '}
						<p className='d1'>
							<span>10%</span>
						</p>
						<p></p> <p>20%</p>
						<p></p>{' '}
						<p className='d1'>
							<span>30%</span>
						</p>
						<p></p> <p>40%</p>
						<p></p>{' '}
						<p className='d1'>
							<span>50%</span>
						</p>
						<p></p> <p>60%</p>
						<p></p>{' '}
						<p className='d1'>
							<span>70%</span>
						</p>
						<p></p> <p>80%</p>
						<p></p>{' '}
						<p className='d1'>
							<span>90%</span>
						</p>
						<p></p> <p>100%</p>
					</div>
				</div>
			</AjusteDepegable>

			<AjusteDepegable
				className={'ajustes-item'}
				titulo={'Tamaño'}
				svg={
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
							d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
						/>
					</svg>
				}
			>
				<div className='card'>
					<div className='dimensiones__grid'>
						<div className='dimensiones__item'>
							<label htmlFor='width'>Anchura:</label>
							<div>
								<input
									type='number'
									id='width'
									placeholder='1-6000'
									name='width'
									value={ajuste.width > 0 ? ajuste.width : ''}
									onChange={handleConfig}
								/>
								<span>px</span>
							</div>
						</div>
						<div className='dimensiones__item'>
							<label htmlFor='height'>Altura:</label>
							<div>
								<input
									type='number'
									id='height'
									placeholder='1-6000'
									name='height'
									value={ajuste.height > 0 ? ajuste.height : ''}
									onChange={handleConfig}
								/>
								<span>px</span>
							</div>
						</div>
					</div>
				</div>
			</AjusteDepegable>

			<AjusteDepegable
				className={'ajustes-item'}
				titulo={'Redimensionar'}
				svg={
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
							d='M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z'
						/>
					</svg>
				}
			>
				<div className='resize__center card'>
					<h2>Redimensiona tu imagen</h2>
					<div className='resize__grid'>
						<label htmlFor='cover'>
							<div>
								<input
									type='radio'
									name='resize'
									id='cover'
									value='cover'
									checked={ajuste.resize === 'cover'}
									onChange={handleConfig}
								/>
							</div>
							<span>Cover</span>
						</label>

						<label htmlFor='contain'>
							<div>
								<input
									type='radio'
									name='resize'
									id='contain'
									value='contain'
									checked={ajuste.resize === 'contain'}
									onChange={handleConfig}
								/>
							</div>
							<span>Contain</span>
						</label>

						<label htmlFor='fill'>
							<div>
								<input
									type='radio'
									name='resize'
									id='fill'
									value='fill'
									checked={ajuste.resize === 'fill'}
									onChange={handleConfig}
								/>
							</div>
							<span>Fill</span>
						</label>

						<label htmlFor='inside'>
							<div>
								<input
									type='radio'
									name='resize'
									id='inside'
									value='inside'
									checked={ajuste.resize === 'inside'}
									onChange={handleConfig}
								/>
							</div>
							<span>Inside</span>
						</label>

						<label htmlFor='outside'>
							<div>
								<input
									type='radio'
									name='resize'
									id='outside'
									value='outside'
									checked={ajuste.resize === 'outside'}
									onChange={handleConfig}
								/>
							</div>
							<span>Outside</span>
						</label>
					</div>
				</div>
			</AjusteDepegable>

			<AjusteDepegable
				className={'ajustes-item'}
				titulo={'Formato'}
				svg={
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
						/>
					</svg>
				}
			>
				<div className='formato__center card'>
					<h2>Formato tu imagen</h2>
					<div className='formato__grid'>
						<label htmlFor='jpg'>
							<div>
								<input
									type='radio'
									name='mimeType'
									id='jpg'
									value='jpg'
									checked={ajuste.mimeType === 'jpg'}
									onChange={handleConfig}
								/>
							</div>
							<span>jpg</span>
						</label>

						<label htmlFor='jpeg'>
							<div>
								<input
									type='radio'
									name='mimeType'
									id='jpeg'
									value='jpeg'
									checked={ajuste.mimeType === 'jpeg'}
									onChange={handleConfig}
								/>
							</div>
							<span>jpeg</span>
						</label>

						<label htmlFor='png'>
							<div>
								<input
									type='radio'
									name='mimeType'
									id='png'
									value='png'
									checked={ajuste.mimeType === 'png'}
									onChange={handleConfig}
								/>
							</div>
							<span>png</span>
						</label>

						<label htmlFor='webp'>
							<div>
								<input
									type='radio'
									name='mimeType'
									id='webp'
									value='webp'
									checked={ajuste.mimeType === 'webp'}
									onChange={handleConfig}
								/>
							</div>
							<span>webp</span>
						</label>

						<label htmlFor='avif'>
							<div>
								<input
									type='radio'
									name='mimeType'
									id='avif'
									value='avif'
									checked={ajuste.mimeType === 'avif'}
									onChange={handleConfig}
								/>
							</div>
							<span>avif</span>
						</label>
					</div>
				</div>
			</AjusteDepegable>
		</section>
	);
};

export default Ajustes;
