export default function TechBox({ children }) {

    const style = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '10px 30px',
        borderRadius: '5px',
        margin: '5px',
        userSelect: 'none'
    }

    return (
        <div style={{
            padding: '10px 30px',
            borderRadius: '5px',
            margin: '5px',
            userSelect: 'none',
            backgroundColor: children.toLowerCase() === 'react' ? '#4ba3ff40' : '#5eff4b40'
        }}>
            {children}
        </div>
    );
}