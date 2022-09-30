import './Navbar.css'
import { Link } from 'react-router-dom'

const navbarLinks = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Projects', href: '/projects' },
    { text: 'Contact', href: '/contact' }
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