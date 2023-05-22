import './Partner.css'
import useEmblaCarousel from 'embla-carousel-react'
import partner_1 from '../../img/partner/p-1.jpg'
import partner_2 from '../../img/partner/p-2.jpg'
import partner_3 from '../../img/partner/p-3.jpg'
import partner_4 from '../../img/partner/p-4.jpg'
import partner_5 from '../../img/partner/p-5.jpg'

const Partner = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, autoplay:true })
    return (
        <div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <img src={partner_1} alt="" />
                    </div>
                    <div className="embla__slide">
                        <img src={partner_2} alt="" />
                    </div>
                    <div className="embla__slide">
                        <img src={partner_3} alt="" />
                    </div>
                    <div className="embla__slide">
                        <img src={partner_4} alt="" />
                    </div>
                    <div className="embla__slide">
                        <img src={partner_5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;