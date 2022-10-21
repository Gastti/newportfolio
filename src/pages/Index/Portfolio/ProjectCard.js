import './ProjectCard.css'

export default function ProjectCard({ name, title, img, children }) {
    return (
        <div className="project-card">
            <div className="project-card-header">
                {children}
            </div>
            <div className="project-card-body">
                <span className='project-card-name'>{name}</span>
                <span className='project-card-title'>{title}</span>
            </div>
            <img src={img} />
        </div>
    );
}