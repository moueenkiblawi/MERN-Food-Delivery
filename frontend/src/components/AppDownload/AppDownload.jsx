// import { assets } from '../../assets/assets'
import './appDownload.css'
import Lottie from 'lottie-react'
import playStore from '../../../public/playStore.json'
import appStore from '../../../public/appStore.json'
function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Dowload <br/> <span style={{ color:"tomato"}}>Tomato App</span></p>
        <div className="app-download-platform">
        <Lottie className="app-download-animation"
               animationData={playStore}
              />
        <Lottie className="app-download-animation"
               animationData={appStore}
              />
            
        </div>
    </div>
  )
}

export default AppDownload