import About from "./component/About";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skill from "./component/Skill";
import cyber from "./assets/pictures/cyber.jpg"

function App() {
  return (
    <div>
      <Navbar />
      <div
        // style={{
        //   backgroundImage: `url(${cyber})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <Home />
        <About />
        <Skill />
        <Project />
        <Footer />
      </div>
    </div>
  );
}

export default App;
