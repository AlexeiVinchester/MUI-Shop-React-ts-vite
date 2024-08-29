import { GoodsItemProps } from "./interface/GoodsItem.interface";

const GoodsItem = ({name, price, id, addToOrder}: GoodsItemProps) => {

    const clickHandler = () => {
        addToOrder({name, price, id});
    };

    return (
        <div className='col-12 col-md-6 px-md-2'>
            <div className='card'>
                <img
                    src={`https://via.placeholder.com/300x150.png?text=${name.slice(
                        0,
                        12
                    )}`}
                    className='card-img-top'
                    alt={name}
                />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Цена: {price} руб.</p>
                    <button
                        className='btn btn-primary'
                        onClick={clickHandler}
                    >
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};

export { GoodsItem };