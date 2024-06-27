import { createContext, useReducer, type ReactNode } from 'react';
import { type State, ActionType, reducer } from './reducer';
import type { GoodItemType } from './consts/types';

export const initialState: State = {
	goods: [],
	loading: true,
	order: [],
	isBasketShow: false,
	alertName: '',
};

type Props = {
	children: ReactNode;
};

export const ShopContext = createContext<State | null>(null);

export function ContextProvider({ children }: Props) {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.setGoods = (items: GoodItemType[]) => {
		dispatch({ type: ActionType.SET_GOODS, payload: { items } });
	};

	value.closeAlert = () => {
		dispatch({ type: ActionType.CLOSE_ALERT });
	};

	value.addToBasket = (item: GoodItemType) => {
		dispatch({ type: ActionType.ADD_TO_BASKET, payload: item });
	};

	value.removeFromBasket = (id: number) => {
		dispatch({ type: ActionType.REMOVE_FROM_BASKET, payload: { id } });
	};

	value.incrementOrderItem = (id: number) => {
		dispatch({ type: ActionType.INCREMENT_ORDER_ITEM, payload: { id } });
	};

	value.decrementOrderItem = (id: number) => {
		dispatch({ type: ActionType.DECREMENT_ORDER_ITEM, payload: { id } });
	};

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
