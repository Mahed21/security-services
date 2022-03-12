import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from './Componant/Home/Home';
import Header from './Componant/Header/Header';
import Footer from './Componant/Footer/Footer';
import NotFound from './Componant/Not/NotFound';


function App() {
  return (
    <div>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
