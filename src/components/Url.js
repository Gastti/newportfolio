import './Url.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Url = ({ children, href, type }) => {
    return (
        <a className={'button-layout ' + type} href={href}>
            <div className='button-text'>{children}</div>
            <div className='button-icon'>
                <ArrowForwardIcon
                    sx={
                        type === 'tiny'
                            ? { fontSize: '14pt' }
                            : { fontSize: '20pt' }} />
            </div>
            <div className="button-underline-wrapper"></div>
        </a>
    );
}

export default Url;