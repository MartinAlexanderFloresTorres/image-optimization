import React from 'react';
import { NavLink } from 'react-router-dom';

const FormRegister = () => {
	return (
		<div className='tabs-content'>
			<div className={`${'signup-tab-content'} `}>
				<form className='signup-form'>
					<input
						type='email'
						className='input'
						id='user_email'
						autoComplete='off'
						placeholder='Correo'
					/>
					<input
						type='text'
						className='input'
						id='user_name'
						autoComplete='off'
						placeholder='Nombre de usuario'
					/>
					<input
						type='password'
						className='input'
						id='user_passw'
						autoComplete='off'
						placeholder='Contraseña'
					/>
					<button type='submit' className='button'>
						Registrarme
					</button>
				</form>
				<div className='help-action'>
					<p className='help-text'>Al registrarse, usted acepta nuestros</p>
					<p>
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
								strokeWidth='2'
								d='M10 23l-4-4m0 0l4-4m-4 4h15'
							></path>
						</svg>
						<a className='terms' href='#'>
							Términos y condiciones
						</a>
					</p>
				</div>

				<div className='button-home'>
					<NavLink to='/'>Regresar</NavLink>
				</div>
			</div>
		</div>
	);
};

export default FormRegister;
