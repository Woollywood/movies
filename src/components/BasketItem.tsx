import type { CartItemType } from '../consts/types';

interface Props {
	item: CartItemType;
	removeFromBasket: (id: number) => void;
	incrementOrderItem: (id: number) => void;
	decrementOrderItem: (id: number) => void;
}

export default function BasketItem({ item, removeFromBasket, incrementOrderItem, decrementOrderItem }: Props) {
	const { mainId, quantity, displayName, price } = item;

	return (
		<li className='collection-item'>
			{displayName} x {quantity} = {price.regularPrice * quantity}
			<button onClick={() => incrementOrderItem(mainId)}>+</button>
			<button onClick={() => decrementOrderItem(mainId)}>-</button>
			<span className='secondary-content' onClick={() => removeFromBasket(mainId)}>
				<i className='material-icons'>close</i>
			</span>
		</li>
	);
}
