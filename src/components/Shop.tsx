import { useEffect, useContext } from 'react';
import { instance } from '../api/instance';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';
import type { GoodsResponse, GoodItemType } from '../consts/types';
import { ShopContext } from '../context';

export default function Shop() {
	const { goods, loading, order, isBasketShow, alertName, setGoods } = useContext(ShopContext)!;

	function handleBasketShow() {
		setBasketShow(!isBasketShow);
	}

	useEffect(() => {
		instance<GoodsResponse>({
			method: 'get',
		}).then(({ data }) => {
			const { shop: shopOriginal } = data;
			const ids = new Set(shopOriginal.map((item) => item.mainId));
			const shopResult: GoodItemType[] = [];
			for (const id of ids) {
				shopResult.push(shopOriginal.find((item) => item.mainId === id)!);
			}

			setGoods!(shopResult);
		});
	}, []);

	return (
		<main className='container shop-wrapper'>
			<Cart quantity={order.length} handleBasketShow={handleBasketShow} />
			{loading ? <Preloader /> : <GoodsList />}
			{isBasketShow && <BasketList items={order} />}
			{alertName && <Alert />}
		</main>
	);
}
