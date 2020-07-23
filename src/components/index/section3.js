import React from 'react'
import '../../styles/index/section2.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={6}
      visibleSlides={3}
    >
      <div className="content">
        <div className="left">
          <h6>CHECKOUT FEATURES</h6>
          <h2>The only app you will need</h2>
          <div className="icon-box">
            <ButtonBack  ><FontAwesomeIcon className="icon" icon={faLongArrowAltLeft} /></ButtonBack>
            <ButtonNext><FontAwesomeIcon className="icon" icon={faLongArrowAltRight} /></ButtonNext>
          </div>
        </div>
        <div className="right">
          <div className="wrap-slide">
            <Slider>
              <Slide index={0}>
                <div className="slide">
                  <img alt="slide" src={require('../../images/img-icon1.png')} />
                  <h3>Free Caliing Service</h3>
                  <p>
                    'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
                  </p>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide">
                  <img alt="slide" src={require('../../images/img-icon1.png')} />
                  <h3>Free Caliing Service</h3>
                  <p>
                    'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
                </p>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="slide">
                  <img alt="slide" src={require('../../images/img-icon1.png')} />
                  <h3>Free Caliing Service</h3>
                  <p>
                    'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
                </p>
                </div>
              </Slide>
              <Slide index={3}>
                <div className="slide">
                  <img alt="slide" src={require('../../images/img-icon1.png')} />
                  <h3>Free Caliing Service</h3>
                  <p>
                    'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
                </p>
                </div>
              </Slide>
              <Slide index={4}>
                <div className="slide">
                  <img alt="slide" src={require('../../images/img-icon1.png')} />
                  <h3>Free Caliing Service</h3>
                  <p>
                    'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
                </p>
                </div>
              </Slide>
              <Slide index={5}>
                <div className="slide">
                  <img alt="slide" src={require('../../images/img-icon1.png')} />
                  <h3>Free Caliing Service</h3>
                  <p>
                    'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
                </p>
                </div>
              </Slide>
            </Slider>
          </div>
        </div>
      </div>
    </CarouselProvider>
  )
}

export default Section3