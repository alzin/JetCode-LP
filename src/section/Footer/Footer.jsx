import { Link } from 'react-router-dom'


import './Footer.css'

import GetStarted from '../../section/GetStarted/GetStarted'

const Footer = () => {
  return (
    <>
      <GetStarted />
      <div className="footer">
        <div className="copy-write">
          <p>© 2023 Keyvalue Software Systems. All rights reserved.</p>
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