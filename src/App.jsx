import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skill from "./component/Skill";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
        <About />
        <Skill />
        <Project />
      </div>
    </div>
  );
}

export default App
