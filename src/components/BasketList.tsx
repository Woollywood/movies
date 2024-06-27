import type { CartItemType } from '../consts/types';
import BasketItem from './BasketItem';

interface Props {
	items: CartItemType[];
	removeFromBasket: (id: number) => void;
	handleBasketShow: () => void;
	incrementOrderItem: (id: number) => void;
	decrementOrderItem: (id: number) => void;
}

export default function BasketList({
	items,
	removeFromBasket,
	incrementOrderItem,
	decrementOrderItem,
	handleBasketShow,
}: Props) {
	const totalPrice = items.reduce((sum, item) => sum + item.price.regularPrice * item.quantity, 0);

	return (
		<ul className='collection basket'>
			<button className='basket__close' onClick={handleBasketShow}>
				X
			</button>
			<li className='collection-item active'>Корзина</li>
			{items.length ? (
				items.map((item) => (
					<BasketItem
						key={item.mainId}
						item={item}
						removeFromBasket={removeFromBasket}
						incrementOrderItem={incrementOrderItem}
						decrementOrderItem={decrementOrderItem}
					/>
				))
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
