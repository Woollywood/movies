import type { GoodItemType, CartItemType } from './consts/types';

export enum ActionType {
	SET_GOODS = 'SET_GOODS',
	CLOSE_ALERT = 'CLOSE_ALERT',
	BASKET_TOGGLE = 'BASKET_TOGGLE',
	ADD_TO_BASKET = 'ADD_TO_BASKET',
	REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET',
	INCREMENT_ORDER_ITEM = 'INCREMENT_ORDER_ITEM',
	DECREMENT_ORDER_ITEM = 'DECREMENT_ORDER_ITEM',
}

export type State = {
	goods: GoodItemType[];
	loading: boolean;
	order: CartItemType[];
	isBasketShow: boolean;
	alertName: string;

	setGoods?: (items: GoodItemType[]) => void;
	closeAlert?: () => void;
	addToBasket?: (item: GoodItemType) => void;
	incrementOrderItem?: (id: number) => void;
	decrementOrderItem?: (id: number) => void;
	removeFromBasket?: (id: number) => void;
};

export type Dispatch = {
	type: ActionType;
	payload?: any;
};

export type ReducerType = {
	state: State;
	dispatch: Dispatch;
};

export function reducer(state: State, { type, payload }: Dispatch): State {
	switch (type) {
		case ActionType.SET_GOODS:
			return {
				...state,
				goods: payload.items || [],
				loading: false,
			};
		case ActionType.CLOSE_ALERT:
			return {
				...state,
				alertName: '',
			};
		case ActionType.ADD_TO_BASKET: {
			const itemIndex = state.order.findIndex((orderItem) => orderItem.mainId === payload.mainId);
			let newOrder: CartItemType[] | null = null;

			if (itemIndex < 0) {
				newOrder = [...state.order, { ...(payload as GoodItemType), quantity: 1 }];
			} else {
				newOrder = state.order.map((orderItem, index) => {
					if (index === itemIndex) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1,
						};
					} else {
						return orderItem;
					}
				});
			}

			return {
				...state,
				order: newOrder,
				alertName: payload.displayName,
			};
		}
		case ActionType.REMOVE_FROM_BASKET:
			return {
				...state,
				order: state.order.filter((el) => el.mainId !== payload.id),
			};
		case ActionType.INCREMENT_ORDER_ITEM:
			return {
				...state,
				order: state.order.map((el) => {
					if (el.mainId === payload.id) {
						return {
							...el,
							quantity: el.quantity + 1,
						};
					} else {
						return el;
					}
				}),
			};
		case ActionType.DECREMENT_ORDER_ITEM: {
			const newOrderItem = state.order.find((el) => el.mainId === payload.id);

			if (newOrderItem?.quantity === 1) {
				return {
					...state,
					order: state.order.filter((el) => el.mainId !== payload.id),
				};
			} else {
				return {
					...state,
					order: state.order.map((el) => {
						if (el.mainId === payload.id) {
							return {
								...el,
								quantity: el.quantity - 1,
							};
						} else {
							return el;
						}
					}),
				};
			}
		}
		case ActionType.BASKET_TOGGLE:
			return {
				...state,
				isBasketShow: !state.isBasketShow,
			};
		default:
			return state;
	}
}
