import GoodsItem from './GoodsItem';
import { ShopContext } from '../context';
import { useContext } from 'react';

export default function GoodsList() {
	const context = useContext(ShopContext);
	const { goods } = context!;

	return goods.length === 0 ? (
		<h3>Ничего не найдено</h3>
	) : (
		goods.map((item) => <GoodsItem key={item.mainId} item={item} />)
	);
}
