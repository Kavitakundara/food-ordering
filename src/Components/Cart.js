import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice'
import '../index.css'; // Ensure this file contains styles for better presentation

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    if (!cartItems || cartItems.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.card.info.price / 100), 0);
    };

    return (
        <div className="mx-auto">
            <h1 className="pt-4">Item Cart</h1>
            <ul className="pt-5">
                {cartItems.map((item) => (
                    <li key={item.card.info.id} className="flex justify-between bg-[#f9f9f9] items-center  container-size rounded-lg">
                        <img
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + item.card.info.imageId}
                            alt={item.card.info.name}
                            className="item-img-width"
                        />
                        <div className="pr-10 pt-4">
                            <h2>{item.card.info.name}</h2>
                            <p>{item.card.info.description}</p>
                            <p>⭐ {item.card.info.ratings.aggregatedRating.rating}</p>
                            <p>💵 {item.card.info.price / 100}₹</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex container-size justify-between pl-6 bg-black p-2 items-center">
                <h3 className="text-white text-lg">Total Price: {calculateTotalPrice()}₹</h3>
                <button className="p-2 mx-16 rounded-lg bg-white text-black shadow-lg font-bold" onClick={handleClearCart}>Clear  Items</button>

            </div>
        </div>
    );
};

export default Cart;
