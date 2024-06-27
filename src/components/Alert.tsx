import { useContext, useEffect } from 'react';
import { ShopContext } from '../context';

export default function Alert() {
	const context = useContext(ShopContext);
	const { alertName, closeAlert } = context!;

	useEffect(() => {
		const timerId = setTimeout(closeAlert!, 3000);

		return () => {
			clearTimeout(timerId);
		};
		// eslint-disable-next-line
	}, [name]);

	return (
		<div className='toast-container'>
			<div className='toast'>{alertName} добавлен в корзину</div>
		</div>
	);
}
