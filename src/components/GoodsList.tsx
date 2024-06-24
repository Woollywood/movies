import GoodsItem from './GoodsItem';
import type { GoodItemType } from '../consts/types';

interface Props {
	items: GoodItemType[];
}

export default function GoodsList(props: Props) {
	const { items = [] } = props;

	return items.length === 0 ? (
		<h3>Ничего не найдено</h3>
	) : (
		items.map((item) => <GoodsItem key={item.mainId} {...item} />)
	);
}
