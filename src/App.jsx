import About from "./component/About";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skill from "./component/Skill";

function App() {
  return (
    <div>
      <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Footer />
    </div>
  );
}

export default App
