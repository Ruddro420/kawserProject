/* eslint-disable react/prop-types */
import './MainSlider.css'
import mainsliderData from '../../../mainslider.json'

import Slider from "react-slick";

// Custom Next Button For Slider
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "", marginRight: '70px' }}
      onClick={onClick}
    />
  );
}

// Custom Previous Button Slider
// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "", zIndex: '99', marginLeft: '30px' }}
//       onClick={onClick}
//     />
//   );
// }

// Main Function
const MainSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };
  return (
    <div className='slider-container relative'>
      <div data-aos="fade-left" data-aos-duration={1000} className='absolute top-20 right-11 z-50'>
        <h1 className='text-7xl text-white font-bold text-right'>We're glad <br /> you're <br /> here.</h1>
      </div>
      <div data-aos="fade-left" data-aos-duration={1200} className='absolute bottom-32 right-11 z-50'>
        <p className='text-xl text-white font-bold text-right'>We manufacture and install signage, large <br /> format graphics, ADA, and decor all across <br /> the nation.</p>
      </div>
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
  );
};


export default MainSlider;