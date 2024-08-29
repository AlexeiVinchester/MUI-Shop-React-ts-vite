import { GoodsListProps } from "./interface/GoodsList.interface";
import { GoodsItem } from "../GoodsItem/GoodsItem";
const GoodsList = ({goods, addToOrder}: GoodsListProps) => {
    return (
        <div className='goods-list col-md-8'>
            <div className='row'>
                {goods.map((item) => (
                    <GoodsItem 
                        key={item.id} 
                        addToOrder={addToOrder} 
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export { GoodsList };