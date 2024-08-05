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
        <header className='d-flex justify-content-between bg-black px-2'>
            <img src={logo} alt="logo" className='w-76 h-63 pt-2'/>
            <div className="nav-flex">
                <ul className='d-flex p-3'>
                    <li className='px-3  text-white '>Home</li>
                    <li className='px-3 decoration-0'>
                        <Link to='/about' className='text-white no-underline'>About Us</Link></li>
                    <li className='px-3  text-white no-underline'>Menu</li>
                    <li className='px-3  text-white'> <Link to='/contact' className=' text-white no-underline'>Contact Us</Link></li>
                    <li className='px-3  text-white'>online{onlineStatus ? "🛜" : "❓"}</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;