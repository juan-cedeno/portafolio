import { Title } from './Title';
import { useEffect, useState } from 'react';
import { getProyects } from '../helpers/ApiPetitions';
import { Proyect } from '../interfaces/ApiInterfaces';
import { ProyectItems } from '.';
import { SkeletorSkills } from './SkeletorSkills';

import '../css/proyects.css'

export const Proyects = () => {

    const [proyect, setProyect] = useState<Proyect[]>([])
    const [loading, setLoading] = useState(true)
    console.log(proyect);


    useEffect(() => {
        getProyects().then(proyects => (
            setProyect(proyects)
        ))
        setLoading(false)
    }, [])

    if (proyect === undefined) {
        return []
    }

    return (
        <>
            <div className='container_proyect' id='proyect'>
                <Title title='Proyects'/>
                <div className='proyects'>
                    <div className='cont_proyect'>
                        {
                            proyect.map(items => (
                                loading ? <SkeletorSkills/> :                                
                                <ProyectItems items = {items} key={items._id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}