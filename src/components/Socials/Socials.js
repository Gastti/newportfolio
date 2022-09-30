import './Socials.css'
import SocialButton from './SocialButton';
import facebook from '../../img/socials/facebook.png';
import instagram from '../../img/socials/instagram.png';
import twitter from '../../img/socials/twitter.png';
import linkedin from '../../img/socials/linkedin.png';
import github from '../../img/socials/github.png';

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