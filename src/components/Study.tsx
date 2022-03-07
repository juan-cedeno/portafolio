import { useEffect, useState } from "react"
import { SkeletorStudy, StudyItems, Title } from "."
import { getCourses } from '../helpers/ApiPetitions';
import { Course } from '../interfaces/ApiInterfaces';
import '../css/study.css'

export const Study = () => {

    const [course, setCourse] = useState<Course[]>([])
    const [loading, setLoading] = useState(true)
    console.log(course);
    

    useEffect(() => {
        getCourses().then(courses=> {
           setCourse(courses)
        })
        setLoading(false)
    }, [])

    return (
        <>
            <Title title="studies and courses"/>
            <div className="container_study">
                {
                    course.map(items => 
                    loading ? <SkeletorStudy/> :
                    <StudyItems 
                        items = {items} 
                        key={items._id}
                    />)
                }
                <div>
                    <img 
                        src="https://i.ibb.co/SV08F16/education.png" 
                        alt="Study img" 
                        className="img_study"
                        />
                </div>
            </div>
        </>
    )
}
