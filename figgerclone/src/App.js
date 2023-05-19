import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
import SupportIcon from "./components/SupportIcon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/support" element={<Support/>}/>
        </Routes>

        <SupportIcon />
        <Footer />
      </Router>
    </>
  );
}

export default App;
