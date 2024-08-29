import { useState } from "react"
import { goods, IGood } from "./data/goods/goots";
import { SearchContainer } from "./components/SearchContainer/SearchContainer";
import { GoodsList } from "./components/GoodsList/GoodsList";
import { IOrderGood } from "./interfaces/IOrderGood";
import { AddOrder } from "./interfaces/AddOrder";
import { BasketList } from "./components/BasketList/BasketList";

function App() {

    const [order, setOrder] = useState<IOrderGood[]>([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState<IGood[]>(goods);

    const changeSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(event.target.value);

        setProducts(
            products.filter((product) =>
                product.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
        );
    };

    const addToOrder = ({ id, name, price }: AddOrder): void => {
        let quantity = 1;

        const sameIndexInOrder = order.findIndex((good) => 
            good.id === id
        );

        if(sameIndexInOrder > -1) {
            quantity = order[sameIndexInOrder].quantity + 1;
            setOrder(
                order.map((orderItem) => {
                    if(orderItem.id !== id) return orderItem;

                    return {
                        id, name, price, quantity
                    }
                })
            );
        } else {
            setOrder((order) => [
                ...order, 
                { id, name, price, quantity }
            ]);
        }
    };

    const deleteGoodFromOrder = (id: string) => {
        setOrder(
            order.filter((good) => good.id !== id)
        );
    };

    return (
        <>
            <div className='App'>
                <div className='container'>
                    <SearchContainer
                        value={search}
                        onChange={changeSearchHandler}
                    />
                    <GoodsList
                        goods={products}
                        addToOrder={addToOrder}
                    />
                    <BasketList 
                        order={order}
                        deleteOrder={deleteGoodFromOrder}
                    />
                </div>
            </div>
        </>
    );
};

export { App };
