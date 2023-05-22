import './Working.css'

import workingData from '../../../workingData.json'

const Working = () => {

    return (
        <>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 data-aos="fade-down" className="text-5xl font-bold m-gallery" >Working</h1>
                    </div>
                </div>
            </div>
            <div className='main-working-container'>
                <div className="working-container">

                    {
                        workingData.map(wData =>
                            <a data-aos="zoom-in" key={wData.id} href='#' className="single-img">
                                <div style={{
                                    backgroundImage: `url(${wData.src})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '400px',
                                    width: '100%',
                                }} className="gallery-image">
                                    <div className="working-content">
                                        <div className="divider"></div>
                                        <h2>{wData.title}</h2>
                                        <div className="learn-more">
                                            <a href={wData.link}>Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Working;