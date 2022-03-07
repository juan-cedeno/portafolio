import apiConfig from '../api/apiConfig';
import { CoursesResponse, ProyectResponse, SkillsResponse } from '../interfaces/ApiInterfaces';

export const getCourses = async () => {
    try {
        const {data} = await apiConfig.get<CoursesResponse>('/courses')
        return data.courses
    } catch (error) {
        console.log(error);
        throw new Error('Comunicarse con soporte tecnico')
    }
}

export const getSkills = async () => {
    try {
        const {data} = await apiConfig.get<SkillsResponse>('/skill')
        return data.skills
    } catch (error) {
        console.log(error);
        throw new Error('Comunicarse con soporte tecnico')
    }
}

export const getProyectss = async () => {
    try {
        const {data} = await apiConfig.get<ProyectResponse>('/proyect')
        return data.proyects
    } catch (error) {
        console.log(error);
        throw new Error('Comunicarse con soporte tecnico')
    }
}