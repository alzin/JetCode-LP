import { Link } from 'react-router-dom'

import './WhitePaper.css'

const WhitePaper = () => {
    return (
        <section className="white-paper">
            <div className="container">
                <div className="banner">
                    <div >
                        <h3>Ready to uncover the potential of your program?</h3>
                        <p>
                            Discover the transformative power of Triibe in enhancing your
                            workplace culture. Get our detailed case study now.
                        </p>
                        <Link to='/' className="btn-download">Download Whitepaper</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhitePaper