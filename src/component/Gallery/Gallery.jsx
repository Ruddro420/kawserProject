import './Gallery.css'
import galleryData from '../../../galleryData.json';
import { useEffect, useState } from 'react';


const Gallery = () => {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
    useEffect(() => {
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * galleryData.length);
            setBackgroundImageUrl(galleryData[randomIndex]);
        }, 5000);

    }, []);

    console.log(backgroundImageUrl);
    return (
        <>
            <div id='design' className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold m-gallery">Gallery</h1>
                    </div>
                </div>
            </div>
            <div className='main-gallery-container'>
                <div className="gallery-container">
                    {
                        galleryData.map(gData =>


                            <a data-aos="zoom-in" key={gData.id} href='#' className="single-img">
                                <div style={{
                                    backgroundImage: `url(${backgroundImageUrl.src})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '400px',
                                    width: '100%',
                                }} className="gallery-image">
                                    <div className="gallery-content">
                                        <div className="divider"></div>
                                        <h2>{gData.title}</h2>
                                        <div className="learn-more">
                                            <a href={gData.link} >Learn More</a>
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

export default Gallery;