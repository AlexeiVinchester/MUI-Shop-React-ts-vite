import { IOrderGood } from "./IOrderGood";

export type AddOrder = Omit<IOrderGood, 'quantity'>;