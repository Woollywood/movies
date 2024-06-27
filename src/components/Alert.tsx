import { useEffect } from 'react';

interface Props {
	name: string;
	closeAlert: () => void;
}

export default function Alert({ name, closeAlert }: Props) {
	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);

		return () => {
			clearTimeout(timerId);
		};
		// eslint-disable-next-line
	}, [name]);

	return (
		<div className='toast-container'>
			<div className='toast'>{name} добавлен в корзину</div>
		</div>
	);
}
