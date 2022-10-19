import './resultado.css';

const Resultado = () => {
	return (
		<div class='cuadro_completo'>
			<h3 id='titulo_cuadro'>Tu archivo convertido</h3>
			<div class='cuadro_botones'>
				<div class='botones_contenedor1'>
					<div id='contenedor_izquierda'>
						<a href=''>Aca esta tu archivo</a>
					</div>
					<div id='contenedor_derecha'>
						<span>12.71 KB</span>
					</div>
				</div>
				<div class='botones_contenedor2'>
					<div class='subcontenedor1'>
						<button class='btn1'>
							<span id='span1'></span>
							<span id='span2'></span>
							<i>
								<svg
									class='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z'
									></path>
								</svg>
							</i>
							<span id='span3'></span>
							<span id='span4'></span>
						</button>
					</div>
					<div class='subconetedor2'>
						<button class='btn2_download'>
							<span id='span1'></span>
							<span id='span2'></span>
							<i>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									class='w-6 h-6'
								>
									<path
										fill-rule='evenodd'
										d='M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z'
										clip-rule='evenodd'
									/>
								</svg>
							</i>
							cargar en la nube
							<span id='span3'></span>
							<span id='span4'></span>
						</button>
					</div>
					<div class='subcontenedor3'>
						<a href='' class='btn_enlace'>
							<span id='span1'></span>
							<span id='span2'></span>
							<i>
								<svg
									class='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
									></path>
								</svg>
							</i>
							Descargar
							<span id='span3'></span>
							<span id='span4'></span>
						</a>
					</div>
				</div>
				<div class='botones_contenedor3'>
					<div class='subcontenedor_boton2'>
						<button class='btn_code'>
							<span id='span1'></span>
							<span id='span2'></span>
							<i>
								<svg
									class='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z'
									></path>
								</svg>
							</i>
							<span id='span3'></span>
							<span id='span4'></span>
						</button>
					</div>
					<div class='subcontenedor_boton3'>
						<a href='' id='button_paper'>
							<span id='span1'></span>
							<span id='span2'></span>
							<i>
								<svg
									class='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
									></path>
								</svg>
							</i>
							Convertir otro archivo
							<span id='span3'></span>
							<span id='span4'></span>
						</a>
					</div>
					<div class='subcontenedor_boton4'>
						<a href='' id='buton_reset'>
							<span id='span1'></span>
							<span id='span2'></span>
							<i>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									class='w-6 h-6'
								>
									<path
										fill-rule='evenodd'
										d='M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z'
										clip-rule='evenodd'
									/>
								</svg>
							</i>
							rehacer
							<span id='span3'></span>
							<span id='span4'></span>
						</a>
					</div>
					<div class='subcontenedor_boton5'>
						<button class='eliminar_btn'>
							<span id='span1'></span>
							<span id='span2'></span>
							<i>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									class='w-6 h-6'
								>
									<path
										fill-rule='evenodd'
										d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
										clip-rule='evenodd'
									/>
								</svg>
							</i>
							Eliminar
							<span id='span3'></span>
							<span id='span4'></span>
						</button>
					</div>
					<div class='subcontenedor_boton6'>
						<button class='descargar_btn'>
							<span id='span1'></span>
							<span id='span2'></span>
							<i>
								<svg
									class='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
									></path>
								</svg>
							</i>
							Descargar archivo comprimido
							<span id='span3'></span>
							<span id='span4'></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resultado;
