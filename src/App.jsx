import About from "./components/About"
import Available from "./components/Available"
import Contact from "./components/Contact"
import CTA from "./components/CTA"
import FAQ from "./components/FAQ"
import Featutes from "./components/Featutes"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Team from "./components/Team"


function App() {


  return (
    <>
      <div>
        
        <Navbar/>
        <HeroSection/>
        <Featutes/>
        <Available/>
        <About/>
        <CTA/>
        <FAQ/>
        <Team/>
        <Contact/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
