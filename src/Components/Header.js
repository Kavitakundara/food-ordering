import logo from './logo.png';
// import Form from 'react-bootstrap/Form';
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import resObj from '../utils/mockData';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {
    const [restroList, setRestroList] = useState(resObj); // Initialize with mock data
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();
    return (
        <header className='flex justify-between'>
            <img src={logo} className="w-20" alt="logo" />
            <div className="nav-flex">
                <ul className='flex p-3'>
                    <li className='px-3'>Home</li>
                    <li className='px-3'>
                        <Link to='/about'>About Us</Link></li>
                    <li className='px-3'>Menu</li>
                    <li className='px-3'> <Link to='/contact'>Contact Us</Link></li>
                    <li className='px-3'>online{onlineStatus ? "🛜" : "❓"}</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;