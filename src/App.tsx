import { useState } from 'react'
import Page_Home from './page/Home'
import './MainView.css'
import Header from './page/Header'
import ProductIntro from './page/Detail/ProductIntro'
import Course from './page/Detail/Course'
import Exam from './page/Detail/Exam'
import MOJ from './page/Detail/MOJ'

function App() {

  return (
    <div className='w-screen h-screen overflow-auto snap-y snap-mandatory scroll-smooth' >
      {/* // !这次得了，就加在这里就能smooth了 */}
      <Page_Home />
      <Header />
      <ProductIntro />
      <Course />
      <Exam />
      <MOJ />
    </div>
  )
}

export default App
