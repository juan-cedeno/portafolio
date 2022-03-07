
import '../css/banner.css'

export const Banner = () => {
    return (
        <>
            <div className="container_banner">
                <div>
                    <p className='hello'>hello</p>
                    <h3 className='name'>I'm Juan Julio Cedeño</h3>
                    <p className='letter_banner'>web developer</p>
                    <p className='letter_banner'>reactJs , nodeJs</p>
                    <div className='cont_icon_banner'>
                         <i className="fa-brands fa-github"></i>
                         <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div>
                        <a className='btn_banner blue_bnt' href="#contact">contact</a>
                        <button className='btn_banner rose_btn'>project</button>
                    </div>
                </div>
                <div>
                    <img 
                        src="https://i.ibb.co/7JxVnxF/banner-img.png" 
                        alt="Banner image"
                        className='image_banner'
                        />
                </div>
            </div>       
        </>
    )
}
