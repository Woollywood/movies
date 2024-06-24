import { useState, useEffect } from 'react';
import { instance } from '../api/instance';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import type { GoodsResponse, GoodItemType } from '../consts/types';

export default function Shop() {
	const [goods, setGoods] = useState<GoodItemType[]>([]);
	const [loading, setLoading] = useState(true);

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

			// setGoods(shopResult);
			setLoading(false);
		});

		console.log('mount');
		return () => {
			console.log('unmount');
		};
	}, []);

	return <main className='container'>{loading ? <Preloader /> : <GoodsList items={goods} />}</main>;
}
