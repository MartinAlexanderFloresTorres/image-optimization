const ButtonLoader = ({ children, ...props }) => {
	return (
		<button className='btn_primary btn_primary--padding' {...props}>
			{children}
		</button>
	);
};

export default ButtonLoader;
