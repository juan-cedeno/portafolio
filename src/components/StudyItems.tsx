import { Course } from '../interfaces/ApiInterfaces';

import '../css/study.css'

interface Props {
    items: Course
}

export const StudyItems = ({items}: Props) => {
    const {name,teacher,time} = items
    return (
        <div className='study'>
             <p className='name_study'><i className="fa-solid fa-check"></i> {name}</p>
             <p className='study_letter'>{teacher && teacher}</p>
             <p className='study_letter'>{time ? `${time} Semester` : ''}</p>
        </div>
    )
}
