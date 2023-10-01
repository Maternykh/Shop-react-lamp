import {useState} from 'react'
import {HiMenu} from 'react-icons/hi'
import {RiShoppingBasketLine} from 'react-icons/ri'
import Order from '../Order/Order';
export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const show = () => setIsShown(!isShown)
  const open = () => setCartOpen(!cartOpen)
  return (
    <div className="Header">
       {!isShown && <div className="Logo">
        <RiShoppingBasketLine className="icon" onClick={open}/>
        <div className="NameShop">MAMOS</div>
        <HiMenu className="icon" onClick={show}/>
      </div>}
      {isShown && 
      <div className='nav'>
        <div><a href="#air" className="href">Каталог</a></div>
        <div><a href="" className="href">О нас</a></div>
        <div><a href="" className="href">Контакты</a></div>
        <HiMenu className="icon" onClick={show}/>
      </div>}
      {cartOpen && (
        <div className="cors">
            {props.orders.map(el => (
                <Order key={el.id} item={el} onDelete={props.onDelete}/>
            ))}
        </div>
      )}
    </div>
  )
}

