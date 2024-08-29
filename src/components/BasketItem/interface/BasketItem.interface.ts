import { IOrderGood } from "../../../interfaces/IOrderGood";

export interface BasketItemProps extends IOrderGood{
    deleteOrder: (id: string) => void;
}