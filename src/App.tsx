import { useState } from "react"
import { goods, IGood } from "./data/goods/goots";
import { SearchContainer } from "./components/SearchContainer/SearchContainer";
import { GoodsList } from "./components/GoodsList/GoodsList";
import { IOrderGood } from "./interfaces/IOrderGood";
import { AddOrder } from "./interfaces/AddOrder";
import { Header } from "./components/Header/Header";
import { Container } from "@mui/material";
import { BasketDrawer } from "./components/BasketDrawer/BasketDrawer";
import { SnackBarContainer } from "./components/SnackBarContainer/SnackBarContainer";

function App() {

    const [order, setOrder] = useState<IOrderGood[]>([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState<IGood[]>(goods);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSnackOpen, setIsSnackOpen] = useState(false)

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

        if (sameIndexInOrder > -1) {
            quantity = order[sameIndexInOrder].quantity + 1;
            setOrder(
                order.map((orderItem) => {
                    if (orderItem.id !== id) return orderItem;

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
        setIsSnackOpen(true);
    };

    const deleteGoodFromOrder = (id: string) => {
        setOrder(
            order.filter((good) => good.id !== id)
        );
    };

    const cartClose = () => {
        setIsCartOpen(false);
    };

    const cartOpen = () => {
        setIsCartOpen(true)
    };

    const snackClose = () => {
        setIsSnackOpen(false);
    };

    return (
        <>
            <Header 
                onClickBasket={cartOpen}
                orderLength={order.length}
            />
            <Container sx={{mt: '1rem'}}>
                <SearchContainer
                    value={search}
                    onChange={changeSearchHandler}
                />
                <GoodsList
                    goods={products}
                    addToOrder={addToOrder}
                />
            </Container>
            <BasketDrawer 
                deleteOrder={deleteGoodFromOrder}
                order={order}
                cartOpen={isCartOpen}
                cartClose={cartClose}
            />
            <SnackBarContainer 
                isOpen={isSnackOpen}
                onClose={snackClose}
            />
        </>
    );
};

export { App };
