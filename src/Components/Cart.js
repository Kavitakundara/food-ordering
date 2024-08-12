import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    if (!cartItems || cartItems.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <ul>
            {cartItems.map((item, index) => (
                <li key={index}>
                    {item.name} - {item.price}
                </li>
            ))}
        </ul>
    );
};

export default Cart;
