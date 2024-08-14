
import About from "./components/About"
import Home from "./components/Home"
import Linksocial from "./components/Linksocial"
import NavBar from "./components/NavBar"
import {FaBars,FaTimes} from "react-icons/fa"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"

function App() {
 

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>


      <Linksocial/>
           
    </>
  )
}

export default App


