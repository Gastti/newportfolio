import './Card.css'
import Url from '../../../components/Url/Url'

const Card = ({ title, children, href, urlText }) => {
    return (
        <div className='homecard-container'>
            <div>
                <h4>{title}</h4>
                <p>{children}</p>
            </div>
            <Url type='tiny' href={href}>{urlText}</Url>
        </div>
    );
}

export default Card;