import { Routes, Route} from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/Home/About";
import Projects from './components/Pages/Home/Projects';
import Contact from './components/Pages/Home/Contact';
import Navber from "./components/Pages/Home/Navber";

function App() {
  return (
    <div className="">
     <Navber/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        </Routes>
    </div>
  );
}      

export default App;
