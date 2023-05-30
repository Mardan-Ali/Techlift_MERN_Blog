import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import News from "./pages/News";
import Sports from "./pages/Sports";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import Blogpost from "./pages/Blogpost";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/sports" element={<Sports />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/post" element={<Blogpost />}></Route>
        </Routes>
        
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
