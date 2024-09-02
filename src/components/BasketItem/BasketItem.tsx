import { IconButton, ListItem, Typography } from "@mui/material";
import { BasketItemProps } from "./interface/BasketItem.interface";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const BasketItem = ({ id, name, price, quantity, deleteOrder }: BasketItemProps) => {

    const clickHandler = () => {
        deleteOrder(id);
    };

    return (
        <ListItem>
            <Typography variant="body1">
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                className='btn btn-primary'
                onClick={clickHandler}
            >
                <DeleteForeverIcon />
            </IconButton>
        </ListItem>
    );
};

export { BasketItem };