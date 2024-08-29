import { IGood } from "../../../data/goods/goots";
import { AddOrder } from "../../../interfaces/AddOrder";

export interface GoodsListProps {
    goods: IGood[];
    addToOrder: (orderGood: AddOrder) => void;
}