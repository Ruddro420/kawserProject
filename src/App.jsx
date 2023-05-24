import About from "./component/About/About"
import Footer from "./component/Footer/Footer"
import FooterBottom from "./component/FooterBottom/FooterBottom"
import Header from "./component/Header/Header"
import Gallery from "./component/Gallery/Gallery"
import Contact from "./component/Contact/Contact"
import Working from "./component/Working/Working"
import Partner from "./component/Partner/Partner"
import MainSlider from "./component/MainSlider/MainSlider"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Header/>
      <MainSlider/>
      <About/>
      <Gallery/>
      <Contact/>
      <Working/>
      <Partner/>
      <Footer/>
      <FooterBottom/>
    </>
  )
}

export default App
