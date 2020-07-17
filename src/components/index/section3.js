import React from 'react'
import '../../styles/index/section2.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';


// const data = [
//   {
//     link: require('../../images/img-icon2.png'),
//     header: 'Free Caliing Service',
//     content: 'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
//   },
//   {
//     link: require('../../images/img-icon1.png'),
//     header: 'Free Caliing Service',
//     content: 'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
//   }
// ].map((item, index) => (
//   <div key={index} className="slide">
//     <img alt="slide" src={item.link} />
//     <h3>{item.header}</h3>
//     <p>
//       {item.content}
//     </p>
//   </div>
// ))

const Section3 = () => {
  return (
    <div className="container row parent">
      <div className="left">
        <h6>CHECKOUT FEATURES</h6>
        <h2>The only app you will need</h2>
        <div className="icon-box">
          <FontAwesomeIcon className="icon" icon={faLongArrowAltLeft} />
          <FontAwesomeIcon className="icon" icon={faLongArrowAltRight} />
        </div>
      </div>
      <div className="right">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: false }}
          scrollbar={{ draggable: false }}
          onSwiper={( swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className="slide">
              <img alt="slide" src={require('../../images/img-icon1.png')} />
              <h3>Free Caliing Service</h3>
              <p>
                'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img alt="slide" src={require('../../images/img-icon2.png')} />
              <h3>Free Caliing Service</h3>
              <p>
                'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
              </p>
            </div>
          </SwiperSlide>  
          <SwiperSlide>
            <div className="slide">
              <img alt="slide" src={require('../../images/img-icon3.png')} />
              <h3>Free Caliing Service</h3>
              <p>
                'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
              </p>
            </div>
          </SwiperSlide>  
          <SwiperSlide>
            <div className="slide">
              <img alt="slide" src={require('../../images/img-icon3.png')} />
              <h3>Free Caliing Service</h3>
              <p>
                'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
              </p>
            </div>
          </SwiperSlide>  
          <SwiperSlide>
            <div className="slide">
              <img alt="slide" src={require('../../images/img-icon2.png')} />
              <h3>Free Caliing Service</h3>
              <p>
                'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
              </p>
            </div>
          </SwiperSlide>  
        </Swiper>
      </div>
    </div>
  )
}

export default Section3