import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { BasketDrawerProps } from "./interface/BasketDrawer.interface";
import { ShoppingBasket } from "@mui/icons-material";
import { BasketItem } from "../BasketItem/BasketItem";
const BasketDrawer = ({ cartOpen, cartClose, order, deleteOrder }: BasketDrawerProps) => {
    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={cartClose}
        >
            <List sx={{ width: '400px' }}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary='Basket' />
                </ListItem>
                <Divider />
                {
                    !order.length ? (
                        <ListItem>Basket is empty</ListItem>
                    ) : (
                        <>
                            {
                                order.map((item) => (
                                    <BasketItem key={item.id} deleteOrder={deleteOrder} {...item} />
                                ))
                            }
                            <Divider />
                            <ListItem>
                                <Typography fontWeight={700}>
                                    Общая стоимость:{' '}
                                    {order.reduce((acc, item) => {
                                        return acc + item.price * item.quantity;
                                    }, 0)} {' '}
                                    рублей.
                                </Typography>
                            </ListItem>
                        </>

                    )
                }
            </List>
        </Drawer>
    );
};

export { BasketDrawer }; 
