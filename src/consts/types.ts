export type GoodItemType = {
	mainId: number;
	name: string;
	description: string;
	price: number;
	full_background: string;
};

export type GoodsResponse = {
	shop: GoodItemType[];
};
