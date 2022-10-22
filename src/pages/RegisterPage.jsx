import React from 'react';
import FormBanner from '../components/login/FormBanner';
import Register from '../components/login/Register';

const RegisterPage = () => {
	return (
		<div className='login'>
			<div className='wrap'>
				<FormBanner />

				<Register />
			</div>
		</div>
	);
};

export default RegisterPage;
