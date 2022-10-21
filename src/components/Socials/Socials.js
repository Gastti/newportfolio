import './Socials.css'
import SocialButton from './SocialButton';
import facebook from '../../assets/images/socials/facebook.png';
import instagram from '../../assets/images/socials/instagram.png';
import twitter from '../../assets/images/socials/twitter.png';
import linkedin from '../../assets/images/socials/linkedin.png';
import github from '../../assets/images/socials/github.png';

export default function Socials() {
    return (
        <div className='socials-layout'>
            <SocialButton
                icon={linkedin}
                href='https://www.linkedin.com/in/gastongutierrez96/'
            />
            <SocialButton
                icon={github}
                href='https://github.com/Gastti'
            />
            <SocialButton
                icon={twitter}
                href='https://twitter.com/gasttidev'
            />
            <SocialButton
                icon={instagram}
                href='https://www.instagram.com/gasttidev/'
            />
        </div>
    );
}