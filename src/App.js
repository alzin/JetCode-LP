import './App.css'
import Container from './section/Container/Container'
import Footer from './section/Footer/Footer'
import Header from './section/Header/Header'
import Home from './pages/Home/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
