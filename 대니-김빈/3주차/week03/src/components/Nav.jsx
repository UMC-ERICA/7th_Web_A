// navbar.jsx
import {Link} from "react-router-dom";
import { IoLogoChrome } from "react-icons/io";
import './Nav.css';
import { RiFindReplaceLine } from "react-icons/ri";
import { GoFileDirectory } from "react-icons/go";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-item a">
                <Link to={'/'}>YONGCHA</Link>
            </div>
            <br/>
            <div className="nav-item a">
                <Link to={'/search'}><RiFindReplaceLine />&nbsp;&nbsp;찾기</Link>
            </div>
            <br/>
            <div className="nav-item a">
                <Link to='/movies'><GoFileDirectory />&nbsp;&nbsp;영화</Link>
            </div>
        </nav>
    );
};

export default Navbar;
