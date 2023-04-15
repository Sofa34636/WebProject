import React, { useState } from 'react'
import './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Editing from './components/pages/editing/Editing';
import View from './components/pages/View/View';
import Home from './components/pages/Home/Home';

let data = [
  {
    id:1,
    date: "01.01.2023",
    priority: "normal",
    marks: "design, development",
  },
  {
    id:2,
    date: "01.03.2023",
    priority: "high",
    marks: "design", 
  },
  {
    id:3,
    date: "01.07.2023",
    priority: "high",
    marks: "research",
  },
  {
    id: 4,
    date: "01.09.2023",
    priority: "normal",
    marks: "research, design, development"
  },
  {
    id: 5,
    date: "01.11.2023",
    priority: "low",
    marks: "research, development"
  }
]


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`/editing`} element={<Editing/>}/>
        <Route path={`/home`} element={<Home data={data}/>}/>
        <Route path={`/view`} element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
