import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/Team" element={<Team />} />
        <Route path="/portfolio/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
