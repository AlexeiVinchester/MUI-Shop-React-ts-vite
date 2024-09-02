import Grid from '@mui/material/Grid2';
import { GoodsItemProps } from "./interface/GoodsItem.interface";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const GoodsItem = ({ name, price, id, poster, addToOrder }: GoodsItemProps) => {

    const clickHandler = () => {
        addToOrder({ name, price, id });
    };

    return (
        <Grid size={{ xs: 12, md: 4 }}>
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <CardMedia
                    sx={{ height: 140 }}
                    image={poster}
                    title={name}
                />
                <CardContent>
                    <Typography
                        component="p"
                        variant='h6'
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant='body1'

                    >
                        Price: {price} RUB.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant='outlined'
                        endIcon={<ShoppingCartOutlinedIcon />}
                        onClick={clickHandler}
                    >
                        Buy
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    );
};

export { GoodsItem };