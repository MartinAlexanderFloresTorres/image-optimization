import React from 'react';
import FormRegister from './FormRegister';
import Tabs from './Tabs';

const Register = () => {
	return (
		<div className='user'>
			<div className='form-wrap'>
				<Tabs />

				<FormRegister />
			</div>
		</div>
	);
};

export default Register;
