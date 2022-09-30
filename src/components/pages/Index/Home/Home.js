import './Home.css'
import SubContainer from '../../../SubContainer';
import Card from './Card';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, animateScroll as scroll } from "react-scroll";
import Socials from '../../../Socials/Socials';
import medrawn from '../../../../img/medrawn5.png'

const PersonalInfo = [
    {
        title: 'About Me',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.',
        urlText: 'Learn More',
        url: '#'
    },
    {
        title: 'My Work',
        paragraph: 'Purus ut faucibus pulvinar elementum integer enim neque fermentum iaculis eu non diam phasellus dolor consectur.',
        urlText: 'Browse Portfolio',
        url: '#'
    }
]

const Home = () => {

    const RenderPersonalInfo = () => {
        return PersonalInfo.map((element, index) => {
            const { title, paragraph, urlText, url } = element;
            return (
                <Card
                    title={title}
                    urlText={urlText}
                >
                    {paragraph}
                </Card>
            );
        })
    }

    return (
        <SubContainer height='100vh'>
            <div className='home-layout'>
                <div className='home-container home-container-left'>
                    <h1>I'm Gastti, <br />Fullstack Developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utad minim veniam.</p>
                </div>
                <div className='home-container home-container-right'>
                    {RenderPersonalInfo()}
                    <div className='home-social-links'>
                        <Socials />
                    </div>
                </div>
                <div className='home-medrawn'>
                    <img src={medrawn} alt='Me Drawn' />
                    <div className='photobg'></div>
                </div>
            </div>
            <Link
                className='scrollButton'
                to='about'
                smooth={true}
            >
                <KeyboardArrowDownIcon sx={{ fontSize: '30pt' }} />
            </Link>
        </SubContainer>
    );
}

export default Home;