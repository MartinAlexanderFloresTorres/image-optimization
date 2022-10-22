import { useState } from 'react';

const AjusteDepegable = ({ titulo, svg, children, ...props }) => {
	const [desplegado, setDesplegado] = useState(false);

	return (
		<div {...props}>
			<div
				className='cabezera__toggle'
				onClick={() => setDesplegado(!desplegado)}
			>
				{svg}
				<h2>{titulo}</h2>
			</div>
			<div className={desplegado ? 'open' : 'close'}>{children}</div>
		</div>
	);
};

export default AjusteDepegable;
