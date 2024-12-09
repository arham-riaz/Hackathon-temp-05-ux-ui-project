
import Header from "./components/Header";
import Hero from "./components/heroSection";
import Navbar from "./components/Navbar";
import Editors from "./components/Editors";
import Footer from "./components/Footer";

export default function Home(){
  return(

    <div>
    <Header/>
    <Navbar/>
    <Hero />
    <Editors/>
    <Footer/>
    </div>
  )
}