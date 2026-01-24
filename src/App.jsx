import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './components/News';
import CalendarItem from './components/CalendarItem';
import ChartBar from './components/ChartBar';
import Header from './layout/Header';
import SideBar from './layout/SideBar';
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <>
      {/*  */}
      <Header />
      <News />
      <div className='items'>
        <CalendarItem />
        <ChartBar />
      </div>

      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
      {/*  */}
    </>
  )
}

export default App
