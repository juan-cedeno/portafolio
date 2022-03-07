
import '../css/footer.css'


export const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <div className="cont_footer">
            <div className='footer'>
                <div style={{display: 'flex' , alignItems:'center'}}>
                    <h3 className='name_footer'>Juan Julio Cedeño</h3>
                    <p className='copy'>&copy; {date}</p>
                </div>
                <div>
                     <i className="fa-brands fa-github icon_footer"></i>
                     <i className="fa-brands fa-linkedin icon_footer"></i>
                </div>
            </div>
        </div>
    )
}
