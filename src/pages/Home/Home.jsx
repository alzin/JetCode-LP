import './Home.css'

// sections
import Hero from '../../section/Hero/Hero'
import Demo from '../../section/Demo/Demo'
import Supercharge from '../../section/Supercharge/Supercharge'
import Features from '../../section/Features/Features'


const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Supercharge />
      <Demo />
      {/* <FreqQuestion /> */}
      {/* <WhitePaper /> */}
    </>
  )
}

export default Home