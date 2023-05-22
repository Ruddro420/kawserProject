import './About.css'
import aboutImg from '../../img/about/about.png'

const About = () => {
    return (
        <div id='about' className='about-container'>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 data-aos="fade-down" className="text-5xl font-bold">About Us</h1>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-down-left" src={aboutImg} className="about-img rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold" data-aos="fade-up">EXECUTION MATTERS.</h1>
                        <h3 className="text-3xl font-bold mt-6" data-aos="fade-up">That’s why we Make it Perfect™.</h3>
                        <div className="divider"></div>
                        <p className="py-6" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste molestias fugiat delectus, quae amet, ipsum provident tempore qui ipsam ipsa cupiditate optio voluptatibus, nesciunt officiis possimus cumque vel aperiam!sss.</p>
                        <h5 className="text-2xl font-bold mt-6">TRUST BLUEMEDIA TO DELIVER THE RESULTS YOU NEED AND THE PEACE OF MIND YOU CRAVE.</h5>
                    </div>
                </div>
            </div>
            <div className="about-hero-bottom">
                <a data-aos="flip-up" href='#' className="button-content">
                    Decor
                </a>
                <a data-aos="flip-up" href='#' className="button-content">
                    Fabrication
                </a>
                <a data-aos="flip-up" href='#' className="button-content">
                    Technology
                </a>
            </div>
        </div>
    );
};

export default About;