import { useState } from 'react';
import './Skills.css';
import Card from './Card';
import HtmlCssIcon from '../../../assets/images/icons/htmlcss.png';
import JavascriptIcon from '../../../assets/images/icons/javascript.png';
import ReactIcon from '../../../assets/images/icons/react.png';
import NodeIcon from '../../../assets/images/icons/node.png';
import MySQLIcon from '../../../assets/images/icons/mysql.png';
import MongoDBIcon from '../../../assets/images/icons/mongodb.png';
import PostgreSQLIcon from '../../../assets/images/icons/postgresql.png';
import GitIcon from '../../../assets/images/icons/git.png';
import WhatsNextIcon from '../../../assets/images/icons/whatsnext.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Subtitle from "../../../components/Subtitle/Subtitle";
import Title from "../../../components/Title/Title";

const skillsList = [
    {
        title: 'Javascript',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: JavascriptIcon
    },
    {
        title: 'Node JS',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: NodeIcon
    },
    {
        title: 'React JS',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: ReactIcon
    },
    {
        title: 'HTML & CSS',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: HtmlCssIcon
    },
    {
        title: 'MySQL',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: MySQLIcon
    },
    {
        title: 'MongoDB',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: MongoDBIcon
    },
    {
        title: 'PostgreSQL',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: PostgreSQLIcon
    },
    {
        title: 'Git',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: GitIcon
    },
    {
        title: 'Whats Next?',
        paragraph: "I'm constantly learning, and I like to add new technologies to my list while perfecting the old ones.",
        icon: WhatsNextIcon
    }
]

const Skills = () => {

    const [skillListPosition, setSkillListPosition] = useState(0)

    const renderSkillsList = () => {
        return skillsList.map((element, index) => {
            const { title, paragraph, icon } = element;
            return (
                <Card
                    icon={icon}
                    title={title}
                    paragraph={paragraph}
                    key={index}
                />
            );
        })
    }

    return (
        <div className="skills-layout">
            <div className='skills-header'>
                <div className='skills-title'>
                    <Subtitle>Skills & Technologies</Subtitle>
                    <Title>The technologies I work with</Title>
                </div>
                <div className='skills-navigation'>
                    <div
                        className='skills-navigation-button back'
                        onClick={() => {
                            skillListPosition < 0
                                ? setSkillListPosition(skillListPosition + 470)
                                : setSkillListPosition(skillListPosition)
                        }}
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: '25pt' }} />
                    </div>
                    <div
                        className='skills-navigation-button'
                        onClick={() => {
                            skillListPosition !== -3760
                                ? setSkillListPosition(skillListPosition - 470)
                                : setSkillListPosition(skillListPosition)
                        }}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: '25pt' }} />
                    </div>
                </div>
            </div>
            <div className='skills-list' style={{ transform: 'translate(' + skillListPosition + 'px)' }}>
                {renderSkillsList()}
                {/* <div className='fillingcard fillingcard-one'></div>
                <div className='fillingcard fillingcard-two'></div> */}
            </div>
        </div>
    );
}

export default Skills;