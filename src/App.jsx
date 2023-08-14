// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Displaycards from "./components/Displaycards";
import Moviedetails from "./components/Moviedetails";
import Footer from "./components/Footer";
// import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="mx-auto max-w-[1280px]">
        <Router>
        <Nav />
            <Routes>
                <Route index element={<Home />}></Route>
                {/* <Route path="movie/:id" element={<h1 className="text-4xl text-center"> Detalis </h1>}></Route> */}
                <Route path="movie/:id" element={<Moviedetails />}></Route>
                <Route path="movies/:type" element={<Displaycards />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;