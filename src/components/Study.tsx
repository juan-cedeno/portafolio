import { useEffect, useState } from "react"
import { SkeletorStudy, StudyItems, Title } from "."
import { getCourses } from '../helpers/ApiPetitions';
import { Course } from '../interfaces/ApiInterfaces';
import '../css/study.css'

export const Study = () => {

    const [course, setCourse] = useState<Course[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCourses().then(courses=> {
            setCourse(courses)
            setLoading(false)
        })
    }, [])

    return (
        <>
            <Title title="studies and courses"/>
            <div className="container_study">
                {
                    loading ? <SkeletorStudy/> : 
                    course.map(items => (
                        <StudyItems items={items} key={items._id}/>
                    ))
                }
                <div>
                    <img 
                        src={require('../assets/education.webp')}
                        alt="Study img" 
                        className="img_study"
                        />
                </div>
            </div>
        </>
    )
}
