import './Working.css'

import workingData from '../../../workingData.json'

const Working = () => {

    return (
        <>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 data-aos="fade-down" data-aos-duration={1000} className="text-5xl font-bold m-gallery" >Working</h1>
                    </div>
                </div>
            </div>
            <div className='main-working-container'>
                <div className="working-container">

                    {
                        workingData.map((wData, i) =>
                            <a data-aos="zoom-in" data-aos-duration={1000 + 100 * i} key={wData.id} href='#' className="">


<div className="card w-96 bg-base-100 shadow-xl mt-10">
  <figure className="pt-10">
    <img src={wData.src} alt={wData.altText} className="rounded-xl working-img" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{wData.title}</h2>
    <p>{wData.description}</p>
  </div>
</div>









                              {/*   <div style={{
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
                                </div> */}
                            </a>

                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Working;