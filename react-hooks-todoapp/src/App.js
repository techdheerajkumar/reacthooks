import React,{useState} from 'react';
import './App.css';
import LoginPage from './Pages/LoginPageComponent';
import TodoPage from './Pages/TodoPageComponent';
import HeaderComponent from './Molecules/HeaderComponent';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className = "app">
      <HeaderComponent />
        <Route exact path = "/" component = {LoginPage} />
        <Route exact path = "/todo" component = {TodoPage} />
    </div>
  );
}

export default App;
