import React,{useState} from 'react';
import './App.css';
import LoginPage from './Pages/LoginPageComponent';
import TodoPage from './Pages/TodoPageComponent';
import HeaderComponent from './Molecules/HeaderComponent';
import AboutPage from './Pages/AboutPageComponent';
import ContactPage from './Pages/ContactPageComponent';
import MoviePage from './Pages/MoviePageComponent';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className = "app">
      <HeaderComponent />
        <Route exact path = "/" component = {LoginPage} />
        <Route exact path = "/todo" component = {TodoPage} />
        <Route exact path = "/about" component = {AboutPage} />
        <Route exact path = "/contact" component = {ContactPage} />
        <Route exact path = "/movies" component = {MoviePage} />
    </div>
  );
}

export default App;
