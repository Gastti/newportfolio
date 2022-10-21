import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

const navbarLinks = [
    { text: 'Home', href: 'home' },
    { text: 'About', href: 'about' },
    { text: 'Technologies', href: 'technologies' },
    { text: 'Projects', href: 'projects' },
    { text: 'Contact', href: 'contact' }
]

const Navbar = () => {

    const renderLinks = () => {
        return navbarLinks.map((link, index) => {
            const { text, href } = link;
            return (
                <li>
                    <Link
                        className='navbar-link'
                        to={href}
                        smooth={true}
                    >
                        {text}
                    </Link>
                </li>
            )
        })
    }

    return (
        <div className="navbar-layout">
            <div>
                <ul>
                    {renderLinks()}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;