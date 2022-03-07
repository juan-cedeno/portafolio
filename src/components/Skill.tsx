import { Title } from './';
import { useEffect, useState } from 'react';
import { getSkills } from '../helpers/ApiPetitions';
import { Skill as Skills } from '../interfaces/ApiInterfaces';
import { SkillsItems } from './SkillsItems';

import '../css/skill.css'
import { SkeletorSkills } from './SkeletorSkills';

export const Skill = () => {

    const [skills, setSkills] = useState<Skills[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSkills().then(skill => (
           setSkills(skill)
        ))
        setLoading(false)
    }, [])

    return (
        <>
            <div className='container_skill' id='skill'>
                <Title title='about me and skills'/>
                <div className='skill'>
                    <div className='about_skill'>
                        <h3 className='about_skill'>About me</h3>
                        <p className='aboutme'>My name is Juan Julio Cedeño, I am a software student at ITLA. and I like the development of web page I am a person who likes to learn a lot and with desire to learn new technologies</p>
                    </div>

                    <div>
                    <div className='img_skill'>
                        {
                            skills.map(items => (
                                loading ? <SkeletorSkills/> : 
                                <SkillsItems items = {items} key={items._id}/>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
