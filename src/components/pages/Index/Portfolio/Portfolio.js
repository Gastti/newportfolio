import '../../../Styles.css'
import './Portfolio.css'
import SubContainer from '../../../SubContainer';
import ProjectCard from './ProjectCard';
import projectimg from '../../../../img/projectplaceholder.png'
import Url from '../../../Url';

export default function Portfolio() {

    return (
        <SubContainer>
            <div className='portfolio-layout'>
                <div className='flex-column'>
                    <div className='portfolio-header'>
                        <h2 className='subtitle'>Portfolio</h2>
                        <span className='texthook'>These are the projects <br /> I have worked on.</span>
                        <Url>Browse Portfolio</Url>
                    </div>
                    <ProjectCard
                        name='Project Name'
                        title='This is the project title, looks cool.'
                        img={projectimg}
                    >
                        <span>React</span>
                        <span>Node</span>
                    </ProjectCard>
                </div>
                <div className='flex-column'>
                    <ProjectCard
                        name='Project Name'
                        title='This is the project title, looks cool.'
                        img={projectimg}
                    >
                        <span>React</span>
                        <span>Node</span>
                    </ProjectCard>
                    <ProjectCard
                        name='Project Name'
                        title='This is the project title, looks cool.'
                        img={projectimg}
                    >
                        <span>React</span>
                        <span>Node</span>
                    </ProjectCard>
                </div>
            </div>
        </SubContainer>

    );
}