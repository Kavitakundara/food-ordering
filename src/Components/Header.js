import logo from './logo.png';
import Form from 'react-bootstrap/Form';
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import resObj from '../utils/mockData';


const Header = () => {
    const [restroList, setRestroList] = useState(resObj); // Initialize with mock data
    const [searchText, setSearchText] = useState('');
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>
                    <Link to ='/about'>About Us</Link></li>
                    <li>Menu</li>
                    <li> <Link to ='/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            <Form>
                <Form.Group className="mb-3 mng-form" controlId="exampleForm.ControlInput1">
                    <Form.Control type="search" placeholder="Search Items..." value={searchText} onChange={(e) => {
                        searchText = (e.target.value);
                    }} /> <IoSearch />

                    <button onClick={() => {
                        const filterRestro = restroList.filter((res) => res.info.name.includes('searchRestro')
                        );
                        setSearchText(filterRestro);
                    }}>Search</button>
                </Form.Group>
            </Form>

        </header>
    )
}

export default Header;