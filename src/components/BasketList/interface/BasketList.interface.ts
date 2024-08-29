import { IOrderGood } from "../../../interfaces/IOrderGood";

export interface BasketListProps {
    order: IOrderGood[];
    deleteOrder: (id: string) => void
}