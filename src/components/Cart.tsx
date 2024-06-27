interface Props {
	quantity: number;
	handleBasketShow: () => void;
}

export default function Cart(props: Props) {
	const { quantity, handleBasketShow } = props;

	return (
		<button className='cart waves-effect waves-light btn' onClick={handleBasketShow}>
			<span>Корзина</span>
			{quantity > 0 && <span className='cart__value'>{quantity}</span>}
		</button>
	);
}
