import './Home.css'

// sections
import Hero from '../../section/Hero/Hero'
import HowAppWork from '../../section/HowAppWork/HowAppWork'
import FreqQuestion from '../../section/FreqQuestion/FreqQuestion'
import WhitePaper from '../../section/WhitePaper/WhitePaper'
import SuperchargeEmployee from '../../section/SuperchargeEmployee/SuperchargeEmployee'
import FeatureTriibe from '../../section/FeatureTriibe/FeatureTriibe'



const Home = () => {
  return (
    <>
      <Hero />
      <FeatureTriibe />
      <SuperchargeEmployee />
      <HowAppWork />
      {/* <FreqQuestion /> */}
      {/* <WhitePaper /> */}
    </>
  )
}

export default Home