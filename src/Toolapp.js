import "./App.css";
import "./Assets/css/bootstrap.min.css";
import "./Assets/css/animate.css";
import './Assets/css/style.css';
import FAQ from "./Components/FAQ";
import Toolbox from "./Components/Toolbox";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function Toolapp() {
  return (
    <div className="App">
    <Toolbox />
    <FAQ />
    <Contact />
    <Footer />
    </div>
  );
}

export default Toolapp;
