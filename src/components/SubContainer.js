import './SubContainer.css'

const SubContainer = ({ children, height, id }) => {
    return (
        <div id={id} className='subcontainer subcontainer-main' style={{height: height ? height : ''}}>
            {children}
        </div>
    );
}

export default SubContainer