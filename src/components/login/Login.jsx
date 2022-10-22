import React from 'react';
import FormLogin from './FormLogin';
import Tabs from './Tabs';

const Login = () => {
	return (
		<div className='user'>
			<div className='form-wrap'>
				<Tabs />

				<FormLogin />
			</div>
		</div>
	);
};

export default Login;
