import './About.css';
import SubContainer from "../../../components/SubContainer/SubContainer";
import Url from '../../../components/Url/Url';
import me from '../../../assets/images/me.png'
import fiverr from '../../../assets/images/icons/fiverr.png';
import workana from '../../../assets/images/icons/workana.png'
import Subtitle from "../../../components/Subtitle/Subtitle";
import Title from "../../../components/Title/Title";

const About = () => {

    return (
        <SubContainer height='100vh'>
            <div className='about-layout'>
                <div className='about-container about-container-left'>
                    <Subtitle>About Me</Subtitle>
                    <Title>I started developing websites in 2021</Title>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    <Url>More about me</Url>
                </div>
                <div className='about-container about-container-right'>
                    <div className='aboutme-info'>
                        <div className='aboutme-text'>

                        </div>
                        <div className='aboutme-photo'>
                            <img src={me} alt='Me' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='divider'></div> */}
            {/* <div className='aboutme-footer'>
                <h2>
                    Working as a freelancer in
                </h2>
                <div className='freelancing-sites'>
                    <a href='https://www.fiverr.com/'><img src={fiverr} /></a>
                    <a href='https://www.workana.com/'><img src={workana} /></a>
                </div>
            </div> */}
        </SubContainer>
    );
}

export default About;