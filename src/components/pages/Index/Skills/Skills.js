import { useState } from 'react'
import './Skills.css'
import Card from './Card';
import HtmlCssIcon from '../../../../img/icons/htmlcss.png';
import JavascriptIcon from '../../../../img/icons/javascript.png';
import ReactIcon from '../../../../img/icons/react.png'
import NodeIcon from '../../../../img/icons/node.png'
import MySQLIcon from '../../../../img/icons/mysql.png'
import MongoDBIcon from '../../../../img/icons/mongodb.png'
import PostgreSQLIcon from '../../../../img/icons/postgresql.png'
import GitIcon from '../../../../img/icons/git.png'
import WhatsNextIcon from '../../../../img/icons/whatsnext.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const skillsList = [
    {
        title: 'Javascript',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: JavascriptIcon
    },
    {
        title: 'React JS',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: ReactIcon
    },
    {
        title: 'Node JS',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: NodeIcon
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
                    <h2>Skills & Technologies</h2>
                    <span className='text-hook'>The technologies I work with</span>
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
            <div className='skills-list' style={{transform: 'translate(' + skillListPosition + 'px)'}}>
                {renderSkillsList()}
                {/* <div className='fillingcard fillingcard-one'></div>
                <div className='fillingcard fillingcard-two'></div> */}
            </div>
        </div>
    );
}

export default Skills;