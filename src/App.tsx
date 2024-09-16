import { useEffect, useRef, useState } from 'react'
import Page_Home from './page/Home'
import './MainView.css'
import 'animate.css'
import Header from './page/Header'
import ProductIntro from './page/Detail/Product-Intro/ProductIntro'
import Course from './page/Detail/Product-Intro/Course'
import Exam from './page/Detail/Product-Intro/Exam'
import MOJ from './page/Detail/Product-Intro/MOJ'
import MOJFeatures from './page/Detail/Product-Intro/MOJFeatures'
import WeInProgress from './page/Detail/Team-Intro/WeInProgress'
import TeamIntro from './page/Detail/Team-Intro/TeamIntro'
import JoinUs from './page/Detail/Join-us/JoinUs'

// td可以考虑使用#跳转并支持鼠标前进后退键的功能
function App() {
  const scrollConRef = useRef(null)
  const ref_product_intro = useRef(null)
  const ref_team_intro = useRef(null)
  const ref_join_us = useRef(null)
  const [curPage, setCurPage] = useState(0)
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState(false);
  window.onresize = () => {
    setWindowInnerWidth(window.innerWidth);
  }
  useEffect(() => {
    if (darkMode) document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }, [darkMode])
  let innerHeight;

  return (
    <div ref={scrollConRef} className='w-screen h-screen relative overflow-auto snap-y snap-mandatory scroll-smooth overflow-x-hidden dark:text-white dark:bg-gray-900'
      onScroll={() => {
        if (!scrollConRef.current || !ref_product_intro.current || !ref_team_intro.current || !ref_join_us.current) return;
        innerHeight = window.innerHeight;
        const scrollTop = (scrollConRef.current as HTMLDivElement).scrollTop;
        if (scrollTop > (scrollConRef.current as HTMLDivElement).scrollHeight - innerHeight - 10) setCurPage(3);
        else if (scrollTop > ((ref_join_us.current as HTMLDivElement).offsetTop - innerHeight * 0.5)) setCurPage(2);
        else if (scrollTop > ((ref_team_intro.current as HTMLDivElement).offsetTop - innerHeight * 0.5)) setCurPage(1);
        else if (scrollTop > ((ref_product_intro.current as HTMLDivElement).offsetTop - innerHeight * 0.5)) setCurPage(0);
      }}
    >
      <Page_Home darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header curPage={curPage} windowInnerWidth={windowInnerWidth} />
      <ProductIntro ref={ref_product_intro} />
      <Course />
      <Exam />
      <MOJ windowInnerWidth={windowInnerWidth} />
      <MOJFeatures />
      <WeInProgress windowInnerWidth={windowInnerWidth} />
      <TeamIntro ref={ref_team_intro} />
      <JoinUs ref={ref_join_us} />
    </div>
  )
}

export default App
