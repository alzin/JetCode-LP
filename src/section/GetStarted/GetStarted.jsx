import './GetStarted.css'

import Logo from '../../assets/images/logo-new.svg'
import AppelStore from '../../assets/images/apple-store.svg'
import GoogleStore from '../../assets/images/google-play.svg'


//component
import { TryFreeButton } from '../../component/Buttons/Buttons'

const GetStarted = () => {
    return (
        <div className="get-started">
            <div className="get-started-l">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="store">
                    <img src={GoogleStore} alt="GoogleStore" />
                    <img src={AppelStore} alt="AppelStore" />
                </div>
            </div>

            <div className="get-started-r">
                <h2>Get started with personal AI manager now</h2>
                <div className="get-started-button">
                    <TryFreeButton />
                    <TryFreeButton />
                </div>
            </div>
        </div>
    )
}

export default GetStarted