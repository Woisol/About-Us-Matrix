import { useRef, useState } from 'react'
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


function App() {
  const scrollConRef = useRef(null)
  const [curPage, setCurPage] = useState(0)
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setWindowInnerWidth(window.innerWidth);
  }
  let innerHeight;
  // document.getElementById('scroll-con')?.addEventListener('scroll', () => {
  //   console.log('onscroll');
  //   const scrollTop = window.scrollY;
  //   if (scrollTop < innerHeight * 6.5) setCurPage(0);
  //   else if (scrollTop < innerHeight * 7.5) setCurPage(1);
  //   else if (scrollTop < innerHeight * 8.5) setCurPage(2);
  //   else if (scrollTop < innerHeight * 9.5) setCurPage(3);
  // })

  return (
    <div ref={scrollConRef} className='w-screen h-screen relative overflow-auto snap-y snap-mandatory scroll-smooth overflow-x-hidden'
      onScroll={() => {
        if (!scrollConRef.current) return;
        // console.log('onscroll');
        // 噢噢调用了的！VSC好像没有把消息同步过来但是控制台是有了的
        // ……你好像一直忘记用launch来调试……
        innerHeight = window.innerHeight;
        const scrollTop = (scrollConRef.current as HTMLDivElement).scrollTop;
        if (scrollTop < (windowInnerWidth > 640 ? innerHeight * 6.5 : innerHeight * 7.3)) setCurPage(0);
        else if (scrollTop < (windowInnerWidth > 640 ? innerHeight * 7.5 : innerHeight * 8.3)) setCurPage(1);
        else if (scrollTop > (scrollConRef.current as HTMLDivElement).scrollHeight - innerHeight - 10) setCurPage(3);
        else if (scrollTop < (windowInnerWidth > 640 ? innerHeight * 10 : innerHeight * 11.5)) setCurPage(2);
      }}
    >
      {/* // !这次得了，就加在这里就能smooth了 */}
      <Page_Home />
      <Header curPage={curPage} windowInnerWidth={windowInnerWidth} />
      <ProductIntro />
      <Course />
      <Exam />
      <MOJ windowInnerWidth={windowInnerWidth} />
      <MOJFeatures />
      <WeInProgress />
      <TeamIntro />
      <JoinUs />
    </div>
  )
}

export default App
