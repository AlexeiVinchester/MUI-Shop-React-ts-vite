import { BasketItemProps } from "./interface/BasketItem.interface";

const BasketItem = ({id, name, price, quantity, deleteOrder}: BasketItemProps) => {
    
    const clickHandler = () => {
        deleteOrder(id);
    };
   
    return (
        <li className='list-group-item'>
            {name} {price}руб x{quantity}
            <button
                className='btn btn-primary'
                onClick={clickHandler}
            >
                Удалить из корзины
            </button>
        </li>
    );
};

export { BasketItem };