"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// components
import YouTubeVideo from '@/components/YouTubeVideo/YouTubeVideo';


// styles
import Styles from './UseCases.module.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// data
import { videoesUseCase } from './data';

const UseCases = () => {
  return (
    <section className={Styles.useCase} id="usecases">
      <div className={`container ${Styles.container}`}>
        <h2 className='gradiantText'>Use Cases</h2>
        <div className={Styles.videoContainer}>
          <Swiper
            spaceBetween={25}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={true}
            slidesPerView={'auto'}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {videoesUseCase.map(item =>
              <SwiperSlide key={item.id}>
                <YouTubeVideo videoId={item.videoId} autoplay={false} />
                <h4 className={Styles.slideTitle}>{item.title}</h4>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default UseCases