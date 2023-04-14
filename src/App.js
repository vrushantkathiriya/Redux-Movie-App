import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import MovieDetail from "./component/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
       <Header></Header>
       <div className='container'>

       
      <Routes>
            <Route path='/' Component={Home} />
            <Route path='/movie/:imdbID' Component={MovieDetail} />
            <Route Component={PageNotFound} />
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
