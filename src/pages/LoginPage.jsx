import React from 'react';
import FormBanner from '../components/login/FormBanner';
import Login from '../components/login/Login';

const LoginPage = () => {
	return (
		<div className='login'>
			<div className='wrap'>
				<FormBanner />

				<Login />
			</div>
		</div>
	);
};

export default LoginPage;
