import React from 'react'
//style
import './Section6.scss'
//carousel
import { CarouselProvider, Slider, Slide, DotGroup, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const data = ['slide', 'slide', 'slide', 'slide', 'slide', 'slide', 'slide', 'slide', 'slide', 'slide', 'slide', 'slide']

const Section6 = () => (
  <section className="section6">
    <div className="app-screen" >
      <div className="title">
        <h6>app screen</h6>
        <h2>How our app looks like</h2>
      </div>
      <div className="carousel-parent">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={210}
          totalSlides={12}
          visibleSlides={5}
        >
          <Slider>
            {
              data.map((slide, index) => (
                <Slide key={index} index={index} >
                  <div className="slide">
                    <img className="screen" alt="scr" src={require('../../images/img-screen1.jpg')} />
                  </div>
                </Slide>
              ))
            }
          </Slider>
          <div className="owl-dots">
            {
              data.map((slide, index) => (
                <Dot className="owl-dot" slide={index} />
              ))
            }
          </div>
          
        </CarouselProvider>
      </div>
    </div>

  </section>
)

export default Section6;