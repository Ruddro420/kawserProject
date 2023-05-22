import About from "./component/About/About"
import Footer from "./component/Footer/Footer"
import FooterBottom from "./component/FooterBottom/FooterBottom"
import Header from "./component/Header/Header"
import Gallery from "./component/Gallery/Gallery"
import Contact from "./component/Contact/Contact"
import Working from "./component/Working/Working"
import Partner from "./component/Partner/Partner"
import MainSlider from "./component/MainSlider/MainSlider"

function App() {


  return (
    <>
      <Header></Header>
      <MainSlider></MainSlider>
      <About></About>
      <Gallery></Gallery>
      <Contact></Contact>
      <Working></Working>
      <Partner></Partner>
     {/*  <Footer></Footer>
      <FooterBottom></FooterBottom> */}
    </>
  )
}

export default App
