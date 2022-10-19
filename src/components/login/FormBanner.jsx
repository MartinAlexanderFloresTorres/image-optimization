import React from 'react';
import { NavLink } from 'react-router-dom';

const FormBanner = () => {
	return (
		<div className='content'>
			<div className='logo'>
				<NavLink to='/'>
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
								<stop stopColor='#7587E4' stopOpacity='0' offset='100%'></stop>
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
				</NavLink>
			</div>

			<div className='banner'>
				<div className='one'>
					<h2>
						<span>images converter</span>
					</h2>
					<p>La manera más fácil y rápida de cambiar el formato a tu imagen</p>
				</div>
			</div>
		</div>
	);
};

export default FormBanner;
