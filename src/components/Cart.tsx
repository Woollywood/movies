import { useContext } from 'react';
import { ShopContext } from '../context';

export default function Cart() {
	const context = useContext(ShopContext);
	const { toggleBasket, order } = context!;

	const quantity = order.length;

	return (
		<button className='cart waves-effect waves-light btn' onClick={toggleBasket}>
			<span>Корзина</span>
			{quantity > 0 && <span className='cart__value'>{quantity}</span>}
		</button>
	);
}
