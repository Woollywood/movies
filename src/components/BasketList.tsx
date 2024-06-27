import BasketItem from './BasketItem';
import { ShopContext } from '../context';
import { useContext } from 'react';

export default function BasketList() {
	const context = useContext(ShopContext);
	const { order, toggleBasket } = context!;

	const totalPrice = order.reduce((sum, item) => sum + item.price.regularPrice * item.quantity, 0);

	return (
		<ul className='collection basket'>
			<button className='basket__close' onClick={toggleBasket}>
				X
			</button>
			<li className='collection-item active'>Корзина</li>
			{order.length ? (
				order.map((item) => <BasketItem key={item.mainId} item={item} />)
			) : (
				<li className='collection-item'>Корзина пуста</li>
			)}
			<li className='collection-item'>
				<button className='waves-effect waves-light btn'>Оформить</button>
			</li>
			<li className='collection-item active'>Общая стоимость: {totalPrice}</li>
		</ul>
	);
}
