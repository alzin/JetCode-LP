import { useLocation } from 'react-router-dom'
import ScrollTo from '../../component/ScrollTo'
import { useEffect } from 'react'

import './Home.css'
// sections
import Hero from '../../section/Hero/Hero'
import Demo from '../../section/Demo/Demo'
import Supercharge from '../../section/Supercharge/Supercharge'
import Features from '../../section/Features/Features'
import UseCases from '../../section/UseCases/UseCases'


const Home = () => {

  const location = useLocation()

  useEffect(() => {
    if (location.hash === '') window.scrollTo(0, 0)
    else ScrollTo(location.hash.slice(1))
  }, [location])


  return (
    <>
      <Hero />
      <Demo />
      <Features />
      <Supercharge />
      <UseCases />
      {/* <FreqQuestion /> */}
      {/* <WhitePaper /> */}
    </>
  )
}

export default Home