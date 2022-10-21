import './Portfolio.css'
import SubContainer from '../../../components/SubContainer/SubContainer';
import ProjectCard from './ProjectCard';
import projectimg from '../../../assets/images/projectplaceholder.png'
import Url from '../../../components/Url/Url';
import TechBox from './TechBox';
import Subtitle from "../../../components/Subtitle/Subtitle";
import Title from "../../../components/Title/Title";

export default function Portfolio() {

    return (
        <SubContainer>
            <div className='portfolio-layout'>
                <div className='flex-column'>
                    <div className='portfolio-header'>
                        <Subtitle>Portfolio</Subtitle>
                        <Title>These are the projects <br /> I have worked on.</Title>
                        <Url>Browse Portfolio</Url>
                    </div>
                    <ProjectCard
                        name='Project Name'
                        title='This is the project description.'
                        img={projectimg}
                    >
                        <TechBox>React</TechBox>
                        <TechBox>Node</TechBox>
                    </ProjectCard>
                </div>
                <div className='flex-column'>
                    <ProjectCard
                        name='Project Name'
                        title='This is the project description.'
                        img={projectimg}
                    >
                        <TechBox>React</TechBox>
                        <TechBox>Node</TechBox>
                    </ProjectCard>
                    <ProjectCard
                        name='Project Name'
                        title='This is the project description.'
                        img={projectimg}
                    >
                        <TechBox>React</TechBox>
                        <TechBox>Node</TechBox>
                    </ProjectCard>
                </div>
            </div>
        </SubContainer>

    );
}