import './Navbar.css'
import logo from '../../assets/images/logo-no-bg.png'
import menu_icon from '../../assets/images/menu.png'
import {useEffect, useState} from "react";
import {Link} from "react-scroll";
import {useToggle} from "../../hooks/useToggle.js";

const Navbar = () => {

    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, []);

    const [menuBurgerOpen, toggleMenuBurgerOpen] = useToggle(false);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <div className="logo-content">
                <img src={logo} alt="" className="logo"/>
                <span>Ducation</span>
            </div>
            <ul className={menuBurgerOpen ? 'show-mobile-menu' : ''}>
                <li>
                    <Link
                        to='hero'
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to='program'
                        smooth={true}
                        offset={-260}
                        duration={500}
                    >
                        Program
                    </Link>
                </li>
                <li>
                    <Link
                        to='about'
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        About us
                    </Link>
                </li>
                <li>
                    <Link
                        to='campus'
                        smooth={true}
                        offset={-260}
                        duration={500}
                    >
                        Campus
                    </Link>
                </li>
                <li>
                    <Link
                        to='testimonials'
                        smooth={true}
                        offset={-260}
                        duration={500}
                    >
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link
                        to='contact'
                        smooth={true}
                        offset={-260}
                        duration={500}
                        className="btn"
                    >
                        Contact us
                    </Link>
                </li>
            </ul>

            {/* Menu Hamburger */}
            <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenuBurgerOpen}/>
        </nav>
    );
};

export default Navbar;
