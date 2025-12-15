import {Routes, Route } from "react-router"
import Header from "./components/header"
import Home from "./components/Home"
import AboutMe from "./components/aboutme"
import Footer from "./components/footer"
import Projects from "./components/project"
import Skills from "./components/skills"

function App() {
  return <div>
    <Header/>
    <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/about" element={<AboutMe/>} />
   <Route path="/skills" element={<Skills />} />
   <Route path="/projects" element={<Projects />} />
   </Routes>
   <Footer />
  </div>

}

export default App
