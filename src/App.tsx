import { useState } from 'react'
import Page_Home from './page/Home'
import './MainView.css'
import Header from './page/Header'
import ProductIntro from './page/Detail/Product-Intro/ProductIntro'
import Course from './page/Detail/Product-Intro/Course'
import Exam from './page/Detail/Product-Intro/Exam'
import MOJ from './page/Detail/Product-Intro/MOJ'
import MOJFeatures from './page/Detail/Product-Intro/MOJFeatures'
import WeInProgress from './page/Detail/Team-Intro/WeInProgress'
import TeamIntro from './page/Detail/Team-Intro/TeamIntro'
import JoinUs from './page/Detail/Join-us/JoinUs'

function App() {

  return (
    <div className='w-screen h-screen relative overflow-auto snap-y snap-mandatory scroll-smooth animation-MOJ-timeline' >
      {/* // !这次得了，就加在这里就能smooth了 */}
      <Page_Home />
      <Header />
      <ProductIntro />
      <Course />
      <Exam />
      <MOJ />
      <MOJFeatures />
      <WeInProgress />
      <TeamIntro />
      <JoinUs />
    </div>
  )
}

export default App
