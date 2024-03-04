import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

// css files
import './App.css'

//loader  
import Loader from './component/Loader/Loader'

// sections
import Container from './section/Container/Container'
import Footer from './section/Footer/Footer'
import Header from './section/Header/Header'

// pages
import Home from './pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs'

// import Faqs from './pages/Faqs/Faqs'
// import Pricing from './pages/Pricing/Pricing'
// import EmployeeEngagement from './pages/EmployeeEngagement/EmployeeEngagement'
// import Wellness from './pages/Wellness/Wellness'
// import Analytics from './pages/Analytics/Analytics'
// import WhitepaperRequest from './pages/WhitepaperRequest/WhitepaperRequest'


const App = () => {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    setTimeout(()=>{
      setIsLoading(true);
    },2000)

  }, [isLoading])

  return (
    <>
      {isLoading ?
        <Router basename={'/TriibeTask'}>
          <Header />
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<ContactUs />} />

              {/* <Route path='/faqs' element={<Faqs />} />
              <Route path='/pricing' element={<Pricing />} />
              <Route path='/employee-engagement' element={<EmployeeEngagement />} />
              <Route path='/wellness' element={<Wellness />} />
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/whitepaper-request' element={<WhitepaperRequest />} /> */}
            </Routes>
          </Container>
          <Footer />
        </Router>
        :
        <Loader />
      }
    </>
  )
}

export default App
