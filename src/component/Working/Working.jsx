import './Working.css'
import gallery_1 from '../../img/gallery/g-1.png';
import gallery_2 from '../../img/gallery/g-2.png';
import gallery_3 from '../../img/gallery/g-3.png';

const Working = () => {

    return (
        <>
        <div className="hero">
               <div className="hero-content text-center">
                   <div className="max-w-md">
                       <h1 className="text-5xl font-bold">Working</h1>
                   </div>
               </div>
           </div>
       <div className='main-working-container'>
           <div className="working-container">
               <a href='#' className="single-img">
                   <div style={{
                       backgroundImage: `url(${gallery_1})`,
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat',
                       backgroundPosition: 'center',
                       height: '400px',
                       width: '100%',
                   }} className="gallery-image">
                       <div className="working-content">
                       <div className="divider"></div>
                           <h2>Meet Your Team</h2>
                           <div className="learn-more">
                           <a href="#">Learn More</a>
                       </div>
                       </div>
                   </div>
               </a>
               <a href='#' className="single-img">
                   <div style={{
                       backgroundImage: `url(${gallery_2})`,
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat',
                       backgroundPosition: 'center',
                       height: '400px',
                       width: '100%'
                   }} className="gallery-image">
                       <div className="working-content">
                       <div className="divider"></div>
                           <h2>Meet Your Team</h2>
                           <div className="learn-more">
                           <a href="#">Learn More</a>
                       </div>
                       </div>
                    
                   </div>
               </a>
               <a href='#' className="single-img">
                   <div style={{
                       backgroundImage: `url(${gallery_3})`,
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat',
                       backgroundPosition: 'center',
                       height: '400px',
                       width: '100%'
                   }} className="gallery-image">
                       <div className="working-content">
                       <div className="divider"></div>
                           <h2>Meet Your Team</h2>
                           <div className="learn-more">
                               <a href="#">Learn More</a>
                           </div>
                       </div>
                   </div>
               </a>
               <a href='#' className="single-img">
                   <div style={{
                       backgroundImage: `url(${gallery_3})`,
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat',
                       backgroundPosition: 'center',
                       height: '400px',
                       width: '100%'
                   }} className="gallery-image">
                       <div className="working-content">
                       <div className="divider"></div>
                           <h2>Meet Your Team</h2>
                           <div className="learn-more">
                               <a href="#">Learn More</a>
                           </div>
                       </div>
                   </div>
               </a>
               <a href='#' className="single-img">
                   <div style={{
                       backgroundImage: `url(${gallery_3})`,
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat',
                       backgroundPosition: 'center',
                       height: '400px',
                       width: '100%'
                   }} className="gallery-image">
                       <div className="working-content">
                       <div className="divider"></div>
                           <h2>Meet Your Team</h2>
                           <div className="learn-more">
                               <a href="#">Learn More</a>
                           </div>
                       </div>
                   </div>
               </a>
               <a href='#' className="single-img">
                   <div style={{
                       backgroundImage: `url(${gallery_3})`,
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat',
                       backgroundPosition: 'center',
                       height: '400px',
                       width: '100%'
                   }} className="gallery-image">
                       <div className="working-content">
                       <div className="divider"></div>
                           <h2>Meet Your Team</h2>
                           <div className="learn-more">
                               <a href="#">Learn More</a>
                           </div>
                       </div>
                   </div>
               </a>
           </div>

       </div>
       </>
    );
};

export default Working;