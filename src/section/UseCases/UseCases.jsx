import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import videoesUseCase from '../../data/videoesUseCase';
// import Logo from '../../assets/images/logo.png'
import YouTubeVideo from '../../component/YouTubeVideo/YouTubeVideo'
// assets
import './UseCases.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const UseCases = () => {

    return (
        <section className="use-case" id="usecases">
            <div className="container">
                <h2 className='gradiant-text'>Use Cases</h2>
                <div className="video-container">
                    <Swiper
                        spaceBetween={25}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        slidesPerView={'auto'}
                        modules={[Autoplay, Pagination, Navigation]}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    //     pauseOnMouseEnter: true
                    // }}
                    >
                        {videoesUseCase.map(item =>
                            <SwiperSlide key={item.id}>
                                {/* <video controls title={item.title} muted>
                                    <source src={item.srcVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video> */}
                                <YouTubeVideo videoId="G1-ZuhjnvsM" autoplay={false}/>
                                <h4 className="slide-title">{item.title}</h4>
                            </SwiperSlide>
                        )}

                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default UseCases