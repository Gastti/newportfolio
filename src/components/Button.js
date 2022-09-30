import './Button.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Button({ children, href }) {
    return (
        <a className='buttontwo-layout'
            style={
                {
                    display: 'flex',
                    fontSize: '40pt',
                    cursor: 'pointer',
                    fontWeight: '500'
                }
            }
            href={href}
        >
            <div>{children}</div>
            <ArrowForwardIcon sx={
                {
                    fontSize: '45pt',
                    color: 'var(--color-sub)'
                }
            } />
        </a>
    );
}