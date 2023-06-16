import { HashRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import AniRoutes from "./components/AniRoutes"



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <AniRoutes/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
