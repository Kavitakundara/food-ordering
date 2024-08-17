import logo from './logo.png';
// import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../index.css';
import { useState, useContext } from 'react';
// import resObj from '../utils/mockData';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContex';
import { useSelector } from 'react-redux';

const Header = () => {

    const onlineStatus = useOnlineStatus();
    const [btnNamereact, setBtnNamereact] = useState("Login");
    const data = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <header className='d-flex justify-content-between bg-black px-2'>
            <img src={logo} alt="logo" className='h-63 pt-2' />
            <div className="nav-flex">
                <ul className='d-flex p-3'>
                    <li><Link to='/' className='px-3 text-white no-underline cursor-pointer'>Home</Link></li>
                    <li className='px-3 decoration-0'>
                        <Link to='/about' className='text-white no-underline cursor-pointer'>About Us</Link></li>
                    <li><Link to='menu' className='px-3 text-white cursor-pointer no-underline'>Menu</Link></li>

                    <li className='px-3  text-white cursor-pointer'> <Link to='/contact' className=' text-white no-underline'>Contact Us</Link></li>
                    <li><Link to='/cart' className='px-2 py-1 rounded-lg text-white cursor-pointer no-underline shadow-white border'>🛒({cartItems.length})</Link></li>
                    <li className='px-3  text-white cursor-pointer'>Online{onlineStatus ? "🛜" : "❓"}</li>
                    {console.log(cartItems)};
                    <li className='px-3  text-white cursor-pointer' onClick={() => {
                        btnNamereact === 'login' ? setBtnNamereact("Logout") :
                            setBtnNamereact("login");
                    }}>{btnNamereact}
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Header;