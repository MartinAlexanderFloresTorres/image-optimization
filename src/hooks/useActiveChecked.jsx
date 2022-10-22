import React, { useState } from 'react';

const useActiveChecked = (initialState = false) => {
	const [checked, setChecked] = useState(initialState);

	const handleChangeChecked = () => setChecked(!checked);

	return [
		checked,
		{
			handleChangeChecked,
		},
	];
};

export default useActiveChecked;
