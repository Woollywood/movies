import { useContext } from 'react';
import type { GoodItemType } from '../consts/types';
import { ShopContext } from '../context';

interface Props {
	item: GoodItemType;
}

export default function GoodsItem({ item }: Props) {
	const { mainId, displayName, displayDescription, price, displayAssets } = item;
	const { addToBasket } = useContext(ShopContext)!;

	function clickHandler() {
		addToBasket!(item);
	}

	return (
		<div className='card' id={String(mainId)}>
			<div className='card-image waves-effect waves-block waves-light'>
				<img className='activator' src={displayAssets[0].full_background} alt={displayName} loading='lazy' />
			</div>
			<div className='card-content'>
				<span className='card-title activator grey-text text-darken-4'>{displayName}</span>
				<p>{displayDescription}</p>
			</div>
			<div>
				<div className='card-action'>
					<button className='waves-effect waves-light btn' onClick={clickHandler}>
						Купить
					</button>
					<span className='right'>{price.regularPrice} руб</span>
				</div>
			</div>
		</div>
	);
}
