import { AddOrder } from "../../../interfaces/AddOrder";

export interface GoodsItemProps {
    id: string;
    name: string;
    price: number;
    poster: string;
    addToOrder: (orderGood: AddOrder) => void;
}