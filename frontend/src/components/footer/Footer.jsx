import { assets } from '../../assets/assets'
import './footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi tempore quia doloribus temporibus ipsam, aperiam ipsa repudiandae cumque magni?</p>
                <div className="footer-social-icons">
                    <a href='/'><img src={assets.facebook_icon} alt="" /></a>
                    <a href='/'><img src={assets.twitter_icon} alt="" /></a>
                    <a href='/'><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+961-70541256</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.<br/> </p>
        <p className='created-link'>Created By  <a href='https://react-portfolio-3a123.web.app/'>Moueen Kiblawi....</a></p>
    </div>
  )
}

export default Footer