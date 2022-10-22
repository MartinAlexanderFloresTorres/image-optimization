import React from 'react';
import { NavLink } from 'react-router-dom';
import useActiveForm from '../../hooks/useActiveForm';

const Tabs = () => {
	const [activeForm, { handleChangeForm }] = useActiveForm();
	return (
		<div className='tabs'>
			<h3 className='login-tab'>
				<NavLink
					to='/login'
					className={`${'log-in'} ${activeForm}`}
					onClick={handleChangeForm}
				>
					<span>Iniciar sesión</span>
				</NavLink>
			</h3>
			<h3 className='login-tab'>
				<NavLink
					to='/register'
					className={`${'log-in'} ${!activeForm}`}
					onClick={handleChangeForm}
				>
					<span>Registrarme</span>
				</NavLink>
			</h3>
		</div>
	);
};

export default Tabs;
