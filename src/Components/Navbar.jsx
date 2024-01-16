import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/main.css';

function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3>Tonetlucas</h3>
            <nav ref={navRef}>
            <a href="#">Home</a>
            <a href="#">My work</a>
            <a href="#">Blog</a>
            <a href="#">About me</a>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
            </button>
            </nav>
            <button className="nav-btn " onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;