/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import './MainSlider.css'
import mainsliderData from '../../../mainslider.json'
import Slider from "react-slick";

// Main Function
const MainSlider = () => {
  const sliderSettings = {
    /* dots: true, */
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };
  return (
    <div className='slider-container relative'>
      <div data-aos="fade-left" data-aos-duration={1000} className='absolute top-20 right-11 z-50 mt-10'>
        <h1 className='text-7xl text-white font-bold text-right'>We're glad <br /> you're <br /> here.</h1>
        <div className='slider-para'>
          <p data-aos="fade-left" data-aos-duration={1200} className='text-xl text-white font-bold text-right mt-5'>We manufacture and install signage, large format graphics, ADA, and decor all across the nation.</p>
        </div>
      </div>
      {/* <div data-aos="fade-left" data-aos-duration={1200} className='absolute bottom-32 right-11 z-50'>
        <p className='text-xl text-white font-bold text-right'>We manufacture and install signage, large <br /> format graphics, ADA, and decor all across <br /> the nation.</p>
      </div> */}
      <div className='main-slide-container'>
        <Slider {...sliderSettings}>
          {
            mainsliderData.map(mainslider =>

              <div key={mainslider.id}>
                <img width="100%" src={mainslider.src} alt={mainslider.altText} />
              </div>
            )
          }
        </Slider>
      </div>
      <div className='background-overlay'></div>
    </div>
  );
};


export default MainSlider;