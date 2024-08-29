import { AddOrder } from "../../../interfaces/AddOrder";

export interface GoodsItemProps {
    id: string;
    name: string;
    price: number;
    addToOrder: (orderGood: AddOrder) => void;
}