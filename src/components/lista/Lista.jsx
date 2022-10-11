import { useState } from 'react';
import useImages from '../../hooks/useImages';
import Item from './Item';
import Compressor from 'compressorjs';
import './lista.css';

const Lista = () => {
	// Estados
	const [ajuste, setAjuste] = useState({
		quality: 0.8,
		width: '',
		height: '',
		resize: 'none',
		mimeType: 'image/jpg',
	});

	// useImagenes
	const { images } = useImages();

	// llenar la configuracion
	const handleConfig = (e) => {
		const { name, value } = e.target;
		setAjuste({ ...ajuste, [name]: value });
	};

	// Function para descargar la imagen
	const download = async (url, name) => {
		const a = document.createElement('a');
		a.href = url;
		a.download = name;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	// handleOptimize
	const handleOptimize = async (files) => {
		// Recorrer los files
		files.forEach((file) => {
			console.log(Number(ajuste.height) || undefined);
			console.log(Number(ajuste.width) || undefined);
			console.log(parseFloat(ajuste.quality));
			console.log(ajuste.resize);
			console.log(ajuste.mimeType);

			new Compressor(file, {
				quality: parseFloat(ajuste.quality),
				height: Number(ajuste.height) || undefined,
				width: Number(ajuste.width) || undefined,
				convertSize: Infinity,
				mimeType: ajuste.mimeType,
				resize: ajuste.resize,

				success(result) {
					// Crear url para descargar
					const url = URL.createObjectURL(result);
					// Descargar el archivo
					(async () => {
						await download(url, result.name);
						URL.revokeObjectURL(url);
					})();
				},
				error(e) {
					console.log(e.message);
				},
			});
		});
	};
	return (
		<section className='container'>
			{images.length > 0 && (
				<section className='lista'>
					<div className='lista__contenedor scroll-1'>
						{images.map((image) => (
							<Item key={image.id} image={image} />
						))}
					</div>

					<button
						className='btn_primary btn_primary--padding'
						onClick={() => handleOptimize(images)}
					>
						<span>Empezar</span>
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
								d='M9 5l7 7-7 7'
							/>
						</svg>
					</button>

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

						<div className='ajustes-calidad'>
							<div className='ajustes-encabezado'>
								<h2 className='d-flex' htmlFor='quality'>
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
									<span>Calidad</span>
								</h2>
							</div>
							<div className='calidad__center'>
								<p className='calidad__parrafo'>
									Decide qué calidad debe tener la imagen resultante. A mejor
									calidad, mayor tamaño de archivo. Una calidad menor reducirá
									el tamaño de archivo.
								</p>
								<div className='calidad__indices d-flex'>
									<span>Calidad mala</span>
									<span>Calidad óptima</span>
									<span>Calidad completa</span>
								</div>
								<input
									name='quality'
									type='range'
									min='0'
									max='1'
									step='0.1'
									value={ajuste.quality}
									onChange={handleConfig}
									title='selecciona la calidad de imagen'
									className='calidad__range'
								/>

								<div className='calidad__indicadores'>
									<p>0%</p>
									<p></p> <p></p>
									<p></p> <p>20%</p>
									<p></p> <p></p>
									<p></p> <p>40%</p>
									<p></p> <p></p>
									<p></p> <p>60%</p>
									<p></p> <p></p>
									<p></p> <p>80%</p>
									<p></p> <p></p>
									<p></p> <p>100%</p>
								</div>
							</div>
						</div>

						<div className='ajustes-dimensiones'>
							<div className='ajustes-encabezado'>
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
											d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
										/>
									</svg>
									<span>Tamaño</span>
								</h2>
							</div>
							<div className='dimensiones__grid'>
								<div className='dimensiones__item'>
									<label htmlFor='width'>Anchura:</label>
									<div>
										<input
											type='number'
											id='width'
											placeholder='1-6000'
											name='width'
											value={ajuste.width}
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
											value={ajuste.height}
											onChange={handleConfig}
										/>
										<span>px</span>
									</div>
								</div>
							</div>
						</div>

						<div className='ajustes-resize'>
							<div className='ajustes-encabezado'>
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
											d='M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z'
										/>
									</svg>
									<span>Redimensionar</span>
								</h2>
							</div>
							<div className='resize__center'>
								<h2>Redimensiona tu imagen</h2>
								<div className='resize__grid'>
									<label htmlFor='none'>
										<div>
											<input
												type='radio'
												name='resize'
												id='none'
												value='none'
												checked={ajuste.resize === 'none'}
												onChange={handleConfig}
											/>
										</div>
										<span>Auto</span>
									</label>

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
								</div>
							</div>
						</div>

						<div className='ajustes-formato'>
							<div className='ajustes-encabezado'>
								<h2 className='d-flex'>
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
									<span>Formato</span>
								</h2>
							</div>

							<div className='formato__center'>
								<h2>Formato tu imagen</h2>
								<div className='formato__grid'>
									<label htmlFor='image/jpg'>
										<div>
											<input
												type='radio'
												name='mimeType'
												id='image/jpg'
												value='image/jpg'
												checked={ajuste.mimeType === 'image/jpg'}
												onChange={handleConfig}
											/>
										</div>
										<span>jpg</span>
									</label>

									<label htmlFor='image/jpeg'>
										<div>
											<input
												type='radio'
												name='mimeType'
												id='image/jpeg'
												value='image/jpeg'
												checked={ajuste.mimeType === 'image/jpeg'}
												onChange={handleConfig}
											/>
										</div>
										<span>jpeg</span>
									</label>

									<label htmlFor='image/avif'>
										<div>
											<input
												type='radio'
												name='mimeType'
												id='image/avif'
												value='image/avif'
												checked={ajuste.mimeType === 'image/avif'}
												onChange={handleConfig}
											/>
										</div>
										<span>avif</span>
									</label>

									<label htmlFor='image/png'>
										<div>
											<input
												type='radio'
												name='mimeType'
												id='image/png'
												value='image/png'
												checked={ajuste.mimeType === 'image/png'}
												onChange={handleConfig}
											/>
										</div>
										<span>png</span>
									</label>

									<label htmlFor='image/webp'>
										<div>
											<input
												type='radio'
												name='mimeType'
												id='image/webp'
												value='image/webp'
												checked={ajuste.mimeType === 'image/webp'}
												onChange={handleConfig}
											/>
										</div>
										<span>webp</span>
									</label>
								</div>
							</div>
						</div>
					</section>

					<button
						className='btn_primary btn_primary--padding'
						onClick={() => handleOptimize(images)}
					>
						<span>Empezar</span>
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
								d='M9 5l7 7-7 7'
							/>
						</svg>
					</button>
				</section>
			)}
		</section>
	);
};

export default Lista;
