import './Footer.css';
import SubContainer from "../SubContainer/SubContainer";
import me from '../../assets/images/me.png';
import Socials from '../Socials/Socials';
import Url from '../Url/Url';
import Navbar from '../Navbar/Navbar'

const Footer = () => {

    return (
        <SubContainer id='footer'>
            <div className='footer-layout'>
                <div className='footer-top'>
                    <div className="footer-container">
                        <div className='footer-profile'>
                            <div className='photo'>
                                <img src={me} alt='Me' />
                            </div>
                            <div className='info'>
                                <h4>Gastón Gutierrez</h4>
                                <p>Backend Developer</p>
                            </div>
                        </div>

                        <div className='footer-socials footer-card'>
                            <p>Follow me:</p>
                            <Socials />
                        </div>

                        <div className='footer-contact footer-card'>
                            <p>Contact me: </p>
                            <div className='contact-email'>
                                <Url>contact@gastti.com</Url>
                            </div>
                            <div className='contact-email'>
                                <Url
                                    href='https://www.linkedin.com/in/gastongutierrez96/'
                                >
                                    linkedin
                                </Url>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </SubContainer>
    );
}

export default Footer;