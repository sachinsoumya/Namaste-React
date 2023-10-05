import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  const dispatch = useDispatch();

  const handleClearCart = ()=>{
    dispatch(clearCart())

  }

  return (
    <div className="text-center">
      <div className=" font-bold p-3 ">Cart</div>
      <button className="bg-black p-2 text-white rounded-sm m-auto" onClick={handleClearCart}>Clear Cart</button>
      <div className="w-6/12 m-auto">
        {cartItem ? <ItemList items={cartItem}/>: <div>Your cart is empty </div>}
       
      </div>
    </div>
  );
};

export default Cart;
