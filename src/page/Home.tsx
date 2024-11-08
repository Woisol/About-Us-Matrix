import logo_white from '../assets/logo/logo-white.png'
import bgstart1 from '../assets/bg/bgstart1.png'
import bgstart from '../assets/bg/bgstart.png'
import DarkModeSwitcher from './Components/DarkModeSwitcher'
export default function Page_Home({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (value: boolean) => void }) {
	return (
		<div className="w-screen h-screen relative snap-start bg-gradient-to-t from-blue-200 to-blue-500 dark:from-blue-500 dark:to-blue-900">
			<div className="size-7 absolute right-8 top-8 bg-gray-950"></div>
			<DarkModeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
			<img className='max-w-full h-screen p-5 object-contain absolute right-1/2 sm:right-5 top-1/2 translate-x-1/2 sm:translate-x-0 -translate-y-1/2 opacity-10 pointer-events-none' draggable={false} src={logo_white} alt="" />
			<img className='w-full h-1/3 absolute bottom-0 object-cover pointer-events-none transition-all dark:brightness-75' draggable={false} src={bgstart1} alt="" />
			<img className='size-[600px] object-contain absolute -right-8 sm:right-5 bottom-0 pointer-events-none transition-all dark:brightness-75' draggable={false} src={bgstart} alt="" />
			<div className="w-fit h-64 absolute left-1/2 sm:left-20 -translate-x-1/2 sm:translate-x-0 top-1/2 -translate-y-[100%] sm:-translate-y-1/2 transition-all">
				<h1 className="text-7xl px-5 sm:text-9xl text-white dark:text-gray-200 font-bold animation-show-delay-1" >MATRIX </h1>
				{/* onLoad={(e) => { setTimeout(() => (e.target as HTMLHeadElement).classList.add('animate__zoomInDown'), 1000) }} */}
				<p className="text-3xl px-5 sm:text-4xl text-white dark:text-gray-200 font-bold ">
					<span className='animation-show-delay-2'>打造最优秀的计算机类课程管理系统和在线评测系统</span><br />
					<span className='animation-show-delay-2'>提供稳定的、人性化的用户体验</span>
				</p>
				<div className="mt-5 flex gap-5 sm:gap-10 text-xl select-none animation-show-delay-3">
					<a className='btn-scale btn-white px-4 py-1 text-black rounded-full shadow-lg underline-animation hover:before:w-[calc(100%-30px)] text-nowrap' href='#contact-us'>联系我们</a>
					<a className='btn-scale btn-white px-4 py-1 text-black rounded-full shadow-lg underline-animation hover:before:w-[calc(100%-30px)] text-nowrap' href='#join-us'>加入我们</a>
					<a className='btn-scale btn-white px-4 py-1 text-black rounded-full shadow-lg underline-animation hover:before:w-[calc(100%-30px)] text-nowrap' onClick={() => { window.open('https://github.com/VMatrixTeam') }}>Github主页</a>
				</div>
			</div>
		</div>
	)
}