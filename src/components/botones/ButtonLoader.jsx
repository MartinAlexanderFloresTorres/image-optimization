const ButtonLoader = ({ estado, children, ...props }) => {
	return (
		<button className='btn_primary btn_primary--padding' {...props}>
			<span>{children}</span>

			{estado ? (
				<span>...</span>
			) : (
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
						d='M9 5l7 7-7 7'
					/>
				</svg>
			)}
		</button>
	);
};

export default ButtonLoader;
