import React from 'react'
import '../../styles/index/section2.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const data = [
  { link: require('../../images/img-icon1.png') },
  { link: require('../../images/img-icon2.png') },
  { link: require('../../images/img-icon3.png') },
].map((node, index) => (
  <Slide key={index} index={index}>
    <div className="slide">
      <img alt="slide" src={node.link} />
      <h3>Free Caliing Service</h3>
      <p>
        'Direct mailing research development buyer iPad validation startup social proof learning curve user experience analytics'
      </p>
    </div>
  </Slide>
));

const Section3 = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={8}
      visibleSlides={3}
    >
      <div className="content">
        <div className="left">
          <h6>CHECKOUT FEATURES</h6>
          <h2>The only app you will need</h2>
          <div className="icon-box">
            <ButtonBack className="btn"><FontAwesomeIcon className="icon" icon={faLongArrowAltLeft} /></ButtonBack>
            <ButtonNext className="btn"><FontAwesomeIcon className="icon" icon={faLongArrowAltRight} /></ButtonNext>
          </div>
        </div>
        <div className="right">
          <div className="wrap-slide">
            <Slider>
              {data}
              {data}
            </Slider>
          </div>
        </div>
      </div>
    </CarouselProvider>
  )
}

export default Section3