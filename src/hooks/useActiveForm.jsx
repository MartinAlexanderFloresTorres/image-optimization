import { useEffect, useState } from 'react';

const useActiveForm = (initialState = false) => {
	const [activeForm, setActiveForm] = useState(initialState);

	useEffect(() => {}, [activeForm]);

	const handleChangeForm = () => setActiveForm(!activeForm);

	return [
		activeForm,
		{
			handleChangeForm,
		},
	];
};

export default useActiveForm;
