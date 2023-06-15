import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import About from "./pages/About"



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/service/:id" element={<Service />}></Route>
          <Route path="/contact/:id" element={<Contact />}></Route>
          <Route path="/about/:id" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
