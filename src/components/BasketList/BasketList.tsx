import { BasketItem } from "../BasketItem/BasketItem";
import { BasketListProps } from "./interface/BasketList.interface";

const BasketList = ({order, deleteOrder}: BasketListProps) => {

    if (!order.length) {
        return (
            <ul className='basket list-group col-md-4'>
                <li className='list-group-item active'>Корзина</li>
                <li className='list-group-item'>Товаров нет</li>
            </ul>
        );
    }

    return (
        <ul className='basket list-group col-md-4'>
            <li className='list-group-item active'>Корзина</li>
            {order.map((item) => (
                <BasketItem key={item.id} deleteOrder={deleteOrder} {...item} />
            ))}
            <li className='list-group-item active'>
                Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0)} {' '}
                рублей. 
            </li>
        </ul>
    );
};

export { BasketList };