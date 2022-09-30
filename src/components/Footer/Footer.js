import './Footer.css';
import SubContainer from "../SubContainer";
import me from '../../../src/img/me.png';
import Socials from '../Socials/Socials';
import Button from '../Button';
import Url from '../Url';
import Navbar from '../Navbar/Navbar'

const Footer = () => {

    return (
        <SubContainer id='footer' height='450px'>
            <div className='footer-layout'>
                <div className='footer-top'>
                    <div className="footer-container left">
                        <div className='footer-profile'>
                            <div className='photo'>
                                <img src={me} alt='Me' />
                            </div>
                            <div className='info'>
                                <h4>Gastón Gutierrez</h4>
                                <p>Fullstack Junior Developer</p>
                            </div>
                        </div>

                    </div>
                    <div className="footer-container right">
                        <Button>Get in touch</Button>
                        <div className='footer-contact'>
                            <div className='contact-email'>
                                <p>Email me: </p>
                                <Url>contact@gastti.com</Url>
                            </div>
                            <div className='contact-email'>
                                <p>Linkedin: </p>
                                <Url
                                    href='https://www.linkedin.com/in/gastongutierrez96/'
                                >
                                    contact now
                                </Url>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-navbar'>
                    <div>
                        <p>Follow me:</p>
                        <Socials />
                    </div>
                    <Navbar />
                </div>
            </div>
        </SubContainer>
    );
}

export default Footer;