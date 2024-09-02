import { GoodsListProps } from "./interface/GoodsList.interface";
import { GoodsItem } from "../GoodsItem/GoodsItem";
import Grid from '@mui/material/Grid2';
const GoodsList = ({goods, addToOrder}: GoodsListProps) => {
    return (
       <Grid container spacing={4}>
            {goods.map((item) => (
                    <GoodsItem 
                        key={item.id} 
                        addToOrder={addToOrder} 
                        {...item}
                    />
                ))}
       </Grid>
                
          
    );
};

export { GoodsList };