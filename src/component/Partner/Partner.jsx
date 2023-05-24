import './Partner.css'
import partnerData from '../../../partnerData.json'
import Slider from 'react-slick';

const Partner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    controls: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
  };
  return (
    <div data-aos="flip-up" data-aos-duration={1000} className='partner-container'>
      <Slider {...settings}>
        {
          partnerData.map(pData =>

            <div key={pData.id} className='inner-partner-image'>
              <img src={pData.src} alt={pData.altText} />
            </div>
          )
        }

      </Slider>
    </div>
  );
};

export default Partner;