import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
	// Estados
	const [herramientas, setHerramientas] = useState(false);
	const [menu, setMenu] = useState(false);
	const [header, setHeader] = useState(false);

	// Efecto de header
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 80) {
				setHeader(true);
			} else {
				setHeader(false);
			}
		});
	}, []);

	// mostrar las herramientas
	const handleHerramientas = () => {
		setHerramientas(!herramientas);
		setMenu(false);
	};

	// mostrar el menu
	const handleMenu = () => {
		setMenu(!menu);
		setHerramientas(false);
	};

	//ícono del menu open
	const openMenu = (
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
				d='M4 6h16M4 12h16M4 18h16'
			/>
		</svg>
	);

	//ícono del menu close
	const closeMenu = (
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
	);

	return (
		<header className={`header ${herramientas || header ? 'bg' : ''}`}>
			<section className='header__flex container'>
				<div className='d-flex'>
					<a
						href='#'
						className='header__logo d-flex'
						title='Optimization images'
					>
						<svg
							className='r_ ra'
							viewBox='0 0 32 32'
							xmlns='http://www.w3.org/2000/svg'
						>
							<defs>
								<linearGradient
									x1='0%'
									y1='32.443%'
									x2='104.18%'
									y2='50%'
									id='hlogo-a'
								>
									<stop stopColor='#FFF' stopOpacity='.299' offset='0%'></stop>
									<stop
										stopColor='#7587E4'
										stopOpacity='0'
										offset='100%'
									></stop>
								</linearGradient>
								<linearGradient
									x1='18.591%'
									y1='0%'
									x2='100%'
									y2='100%'
									id='hlogo-b'
								>
									<stop stopColor='#818CF8' offset='0%'></stop>
									<stop stopColor='#C7D2FE' offset='100%'></stop>
								</linearGradient>
							</defs>
							<g fill='none' fillRule='evenodd'>
								<path fill='#3730A3' d='M16 18.5V32l15.999-9.25V9.25z'></path>
								<path fill='#4F46E5' d='m0 23 16 9V18.501L0 9.251z'></path>
								<path
									fillOpacity='.64'
									fill='url(#hlogo-a)'
									d='M16 13 0 23l16 9 16-9z'
								></path>
								<path
									fill='url(#hlogo-b)'
									d='M16 0 0 9.25l16 9.25 15.999-9.25z'
								></path>
							</g>
						</svg>
					</a>
					<section className='header__center'>
						<button
							id='btn-herramientas'
							className='d-flex header__item'
							onClick={handleHerramientas}
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
									d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
								/>
							</svg>
							<span>Toda las herramientas</span>
							<svg
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
								className={`${herramientas ? 'svg-rotar' : ''}`}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</button>

						<section
							className={`header__herramientas scroll-1 ${
								herramientas ? 'open' : ''
							}`}
						>
							<div className='container'>
								<ul>
									<li>
										<h2 className='p-item header__item'>Conversor</h2>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
								</ul>
								<ul>
									<li>
										<h2 className='p-item header__item'>Conversor</h2>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
								</ul>
								<ul>
									<li>
										<h2 className='p-item header__item'>Conversor</h2>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
								</ul>
								<ul>
									<li>
										<h2 className='p-item header__item'>Conversor</h2>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
									<li>
										<a href='#' className='d-flex header__item p-item'>
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
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>Convertir imagen a webP</span>
										</a>
									</li>
								</ul>
							</div>
						</section>
					</section>
				</div>

				<div className='header__right d-flex'>
					<NavLink to='/login' id='login' className='d-flex header__item'>
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
								d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
							/>
						</svg>
						<span>Iniciar Sesión</span>
					</NavLink>
					<div className='header__cuenta'>
						<button onClick={handleMenu} className='d-flex'>
							{/* <svg
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  // d='M4 6h16M4 12h16M4 18h16'
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> */}
							{menu ? closeMenu : openMenu}
						</button>
						<div className={`header__cuentaOption ${menu ? 'open' : ''}`}>
							<a href='#' className='d-flex p-item header__item'>
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
										d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
									/>
								</svg>
								<div>
									<span>Nombre del usuario</span>
									<span className='sky'>correo@correo.com</span>
								</div>
							</a>

							<a href='#' className='d-flex p-item header__item'>
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
								<span>Configuración</span>
							</a>

							<NavLink to='login' className='d-flex p-item header__item'>
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
										d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
									/>
								</svg>
								<span>Iniciar Sesión</span>
							</NavLink>

							<button className='d-flex p-item header__item'>
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
										d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
									/>
								</svg>
								<span>Cerrar Sesión</span>
							</button>
						</div>
					</div>
				</div>
			</section>
		</header>
	);
};

export default Header;
