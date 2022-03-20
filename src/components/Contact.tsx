
import { Title } from '.'
import '../css/contact.css'

export const Contact = () => {
    return (
        <div className="container_contact" id='contact'>
            <Title title='contact'/>
            <div className='contact'>
                    <img 
                        src={require('../assets/contact.webp')} 
                        alt="Contact" 
                        className='img_contact'
                        />
                <div>
                    <div className='phone'>
                        <a className='cont_item' href="mailto:juancc@gmail.com"><i className="fa-solid fa-envelopes-bulk"></i>juancc0315@gmail.com</a>
                        <a className='cont_item' href="tel:+18098200257"><i className="fa-solid fa-phone"></i> 809-820-0257</a>
                        <a className='cont_item' href="tel:+18299661343"><i className="fa-solid fa-phone"></i> 829-966-1343</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
