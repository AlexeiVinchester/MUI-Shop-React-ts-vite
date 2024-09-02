import { BasketListProps } from "../../BasketList/interface/BasketList.interface";

export interface BasketDrawerProps extends BasketListProps {
    cartOpen: boolean;
    cartClose: () => void;
}