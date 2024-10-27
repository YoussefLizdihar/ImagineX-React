import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Assets/css/bootstrap.min.css';
import './Assets/css/animate.css';
import Home from './Components/Home';
import About from './Components/About';
import Why from './Components/Why';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Toolapp from './Toolapp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Why />
                <Pricing />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Tool Page Route */}
          <Route
            path="/tool"
            element={
              <>
                <Toolapp />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
