import './Home.css'

// sections
import Hero from '../../section/Hero/Hero'
import HowAppWork from '../../section/HowAppWork/HowAppWork'
import FreqQuestion from '../../section/FreqQuestion/FreqQuestion'
import WhitePaper from '../../section/WhitePaper/WhitePaper'
import GetStarted from '../../section/GetStarted/GetStarted'



const Home = () => {
  return (
    <>
      <Hero />
      <HowAppWork />
      <FreqQuestion />
      <WhitePaper />
      <GetStarted />
    </>
  )
}

export default Home