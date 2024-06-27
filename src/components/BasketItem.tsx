import { useContext } from 'react';
import type { CartItemType } from '../consts/types';
import { ShopContext } from '../context';

interface Props {
	item: CartItemType;
}

export default function BasketItem({ item }: Props) {
	const { mainId, quantity, displayName, price } = item;
	const context = useContext(ShopContext);
	const { incrementOrderItem, decrementOrderItem, removeFromBasket } = context!;

	return (
		<li className='collection-item'>
			{displayName} x {quantity} = {price.regularPrice * quantity}
			<button onClick={() => incrementOrderItem!(mainId)}>+</button>
			<button onClick={() => decrementOrderItem!(mainId)}>-</button>
			<span className='secondary-content' onClick={() => removeFromBasket!(mainId)}>
				<i className='material-icons'>close</i>
			</span>
		</li>
	);
}
