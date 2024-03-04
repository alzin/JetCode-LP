import { Link } from 'react-router-dom'

// css files
import './Footer.css'

// component
// import GetStarted from '../../section/GetStarted/GetStarted'

const Footer = () => {
  return (
    <>
      {/* <GetStarted /> */}
      <div className="footer">
        <div className="copy-write">
          <p>© {new Date().getFullYear()} JetCode. All rights reserved.</p>
        </div>

        <div className="terms">
          <Link to='/'>Terms of Service </Link>
          <Link to='/'>  Privacy Policy</Link>
        </div>
      </div>

    </>
  )
}

export default Footer