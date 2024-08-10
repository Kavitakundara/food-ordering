import logo from './logo.png';
// import Form from 'react-bootstrap/Form';
    import { Link } from 'react-router-dom';
import '../index.css';
// import resObj from '../utils/mockData';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {
  
    const onlineStatus = useOnlineStatus();
    return (
        <header className='d-flex justify-content-between bg-black px-2'>
            <img src={logo} alt="logo" className='h-63 pt-2'/>
            <div className="nav-flex">
                <ul className='d-flex p-3'>
                    <li><Link to='/' className='px-3 text-white no-underline'>Home</Link></li>
                    <li className='px-3 decoration-0'>
                        <Link to='/about' className='text-white no-underline'>About Us</Link></li>
                    <li><Link to='menu' className='px-3 text-white no-underline'>Menu</Link></li>
                    <li className='px-3  text-white'> <Link to='/contact' className=' text-white no-underline'>Contact Us</Link></li>
                    <li className='px-3  text-white'>online{onlineStatus ? "🛜" : "❓"}</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;