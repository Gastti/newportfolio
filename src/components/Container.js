import './Container.css'

const Container = ({ children, className, style, id }) => {
    return (
        <div id={id} className={'container ' + className} style={style}>
            {children}
        </div>
    );
}

export default Container