import './App.css'
import Container from './section/Container/Container'
import Footer from './section/Footer/Footer'
import Header from './section/Header/Header'
import Home from './pages/Home/Home'
import Faqs from './pages/Faqs/Faqs'
import Pricing from './pages/Pricing/Pricing'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




const App = () => {
  return (
    <>
      <Router basename={'/TriibeTask'}>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/faqs' element={<Faqs />} />
            <Route path='/pricing' element={<Pricing />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
