import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Projects";
import Footer from "./components/Contacts";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        
        <Routes>
          {/* Home Route */}
          <Route 
            path="/" 
            element={
              <>
              <Navbar />
                <Hero />
                <About />
                <Experience />
                <Footer />
              </>
            } 
          />
          {/* Projects Route */}
          <Route path="/projects" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
