import './Partner.css'

import partner_1 from '../../img/partner/p-1.jpg'
import partner_2 from '../../img/partner/p-2.jpg'
import partner_3 from '../../img/partner/p-3.jpg'
import partner_4 from '../../img/partner/p-4.jpg'
import partner_5 from '../../img/partner/p-5.jpg'
import Slider from 'react-slick'

const Partner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        controls:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          
        ]
      };
    return (
        <div className='partner-container'>
        <Slider {...settings}>
          <div className='inner-partner-image'>
            <img src={partner_1} alt="" />
          </div>
          <div className='inner-partner-image'>
            <img src={partner_2} alt="" />
          </div>
          
          <div className='inner-partner-image'>
            <img src={partner_3} alt="" />
          </div>
          <div className='inner-partner-image'>
            <img src={partner_4} alt="" />
          </div>
          
          <div className='inner-partner-image'>
            <img src={partner_5} alt="" />
          </div>
          
          
        </Slider>
      </div>
    );
};

export default Partner;