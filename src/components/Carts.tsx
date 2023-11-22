import { IData } from '../App';
import Cart from './Cart';
import './Carts.css'

const Carts = (props: IData) => {

    const {items,title} = props;

    return (
        <div className='cartsItems'>
            <h1 className='cartsItems__title'>{title}</h1>    
            <div className='cartsItems__item'>
                {items.map(elem => <Cart key={elem.text} {...elem}/>)}
            </div>  
          
        </div>
    );
};

export default Carts;