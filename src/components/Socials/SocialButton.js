import './SocialButton.css';


export default function SocialButton({ icon, href }) {
    return (
        <a className='socialbutton-layout' href={href} target='_blank'>
            <img src={icon} />
        </a>
    );
}