import { Proyect } from '../interfaces/ApiInterfaces';

import '../css/proyects.css'

interface Props {
    items: Proyect
}

export const ProyectItems = ({items}: Props) => {
    const {image,languaje,name ,link} = items
    return (
        <>
            <div className='container_proyect_items'>
                    <img 
                        src={image} alt={name} 
                        className='img_proyect'
                    />
                <div className='cont_letter_proyect'>
                    <p className='name_proyect'>{name}</p>
                    <p className='languaje_proyect'>{languaje}</p>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='btn_proyect'
                        >View Project</a>
                </div>
            </div>
        </>
    )
}
