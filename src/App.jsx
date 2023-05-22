import About from "./component/About/About"
import Footer from "./component/Footer/Footer"
import FooterBottom from "./component/FooterBottom/FooterBottom"
import Header from "./component/Header/Header"
import Slider from "./component/Slider/Slider"
import Gallery from "./component/Gallery/Gallery"
import Contact from "./component/Contact/Contact"
import Working from "./component/Working/Working"
import Partner from "./component/Partner/Partner"

function App() {


  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <About></About>
      <Gallery></Gallery>
      <Contact></Contact>
      <Working></Working>
      <Partner></Partner>
      <Footer></Footer>
      <FooterBottom></FooterBottom>
    </>
  )
}

export default App
