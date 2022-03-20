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
                         <a href="https://github.com/juan-cedeno" target="_blank" rel="noopener noreferrer">
                             <i className="fa-brands fa-github"></i>
                         </a>
                         <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div>
                        <a className='btn_banner blue_bnt' href="#contact">contact</a>
                        <a 
                            href='https://drive.google.com/file/d/1BTaw8fbqByH2xCS4udEbW_96Oo7C_7ND/view?usp=sharing' 
                            className='btn_banner rose_btn'
                            target="_blank" rel="noopener noreferrer"
                            >Curriculum vitae</a>
                        
                    </div>
                </div>
                <div>
                    <img 
                        src={require('../assets/banner-img.webp')}
                        alt="img-banner-alt"
                        className='image_banner'
                        />
                </div>
            </div>       
        </>
    )
}
