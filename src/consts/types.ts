export type AssetType = {
	background: string;
	full_background: string;
};

export type PriceType = {
	finalPrice: number;
	floorPrice: number;
	regularPrice: number;
};

export type GoodItemType = {
	mainId: number;
	displayName: string;
	displayDescription: string;
	price: PriceType;
	displayAssets: AssetType[];
};

export type CartItemType = {
	quantity: number;
} & GoodItemType;

export type GoodsResponse = {
	shop: GoodItemType[];
};
