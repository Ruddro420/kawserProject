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
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "", zIndex: '99', marginLeft: '30px' }}
      onClick={onClick}
    />
  );
}

// Main Function
const MainSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className='slider-container'>
      <Slider {...sliderSettings}>
        {
          mainsliderData.map(mainslider =>

            <div key={mainslider.id}>
              <img src={mainslider.src} alt={mainslider.altText} />
            </div>
          )
        }
      </Slider>
    </div>
  );
};


export default MainSlider;