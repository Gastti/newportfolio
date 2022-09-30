import './About.css';
import SubContainer from "../../../SubContainer";
import Url from '../../../Url';
import me from '../../../../img/me.png'
import fiverr from '../../../../img/icons/fiverr.png';
import workana from '../../../../img/icons/workana.png'

const About = () => {

    return (
        <SubContainer height='100vh'>
            <div className='about-layout'>
                <div className='about-container about-container-left'>
                    <h2>About Me</h2>
                    <span className='text-hook'>I’ve been developing websites since 2021</span>
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
            <div className='aboutme-footer'>
                <h2>
                    Working as a freelancer in
                </h2>
                <div className='freelancing-sites'>
                    <a href='https://www.fiverr.com/'><img src={fiverr} /></a>
                    <a href='https://www.workana.com/'><img src={workana} /></a>
                </div>
            </div>
        </SubContainer>
    );
}

export default About;