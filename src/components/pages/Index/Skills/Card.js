import './Card.css'

const Card = ({ icon, title, paragraph}) => {
    return (
        <div className='skillcard-layout'>
            <div className='skillcard-icon'><img src={icon} alt={title}/></div>
            <h4 className='skillcard-title'>{title}</h4>
            <p className='skillcard-paragraph'>{paragraph}</p>
            <div className='skillcard-underline'></div>
        </div>
    );
}

export default Card;