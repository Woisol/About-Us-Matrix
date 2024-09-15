import logo_white from '../assets/logo/logo-white.png'
import bgstart1 from '../assets/bg/bgstart1.png'
import bgstart from '../assets/bg/bgstart.png'
// !用svg似乎在过度拉长的时候右边都变成直线了……
function DarkModeSwitcher({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (value: boolean) => void }) {
	return (
		<div className={`w-20 h-10 p-1 absolute top-5 right-10 rounded-full cursor-gra transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`} onClick={() => setDarkMode(!darkMode)}>
			<div className={`size-8 relative rounded-full overflow-hidden transition-all duration-300 ${darkMode ? 'bg-gray-200 translate-x-10' : 'bg-yellow-200'}`}>
				<div className={`size-7 bg-gray-700 rounded-full transition-all duration-300 ${darkMode ? '-translate-x-2 -translate-y-' : '-translate-x-10 -translate-y-5'}`}></div>
			</div>
		</div>
	)
}
export default function Page_Home({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (value: boolean) => void }) {
	return (
		<div className="w-screen h-screen relative snap-start bg-gradient-to-t from-blue-200 to-blue-500 dark:from-blue-500 dark:to-blue-900">
			<DarkModeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
			<img className='max-w-full h-screen p-5 object-contain absolute right-1/2 sm:right-5 top-1/2 translate-x-1/2 sm:translate-x-0 -translate-y-1/2 opacity-10 pointer-events-none' draggable={false} src={logo_white} alt="" />
			<img className='w-full h-1/3 absolute bottom-0 object-cover pointer-events-none transition-all dark:brightness-75' draggable={false} src={bgstart1} alt="" />
			<img className='size-[600px] object-contain absolute right-5 bottom-5 pointer-events-none transition-all dark:brightness-75' draggable={false} src={bgstart} alt="" />
			<div className="w-fit h-64 absolute left-1/2 sm:left-20 -translate-x-1/2 sm:translate-x-0 top-1/2 -translate-y-[100%] sm:-translate-y-1/2 transition-all">
				{/* //!好欸！加了个h限制就不会出现文字换行导致上面元素移位的问题了！ */}
				<h1 className="text-9xl text-white dark:text-gray-200 font-bold animation-show-delay-1" >MATRIX </h1>
				{/* onLoad={(e) => { setTimeout(() => (e.target as HTMLHeadElement).classList.add('animate__zoomInDown'), 1000) }} */}
				<p className="text-4xl text-white dark:text-gray-200 font-bold ">
					<span className='animation-show-delay-2'>打造最优秀的计算机类课程管理系统和在线评测系统</span><br />
					<span className='animation-show-delay-2'>提供稳定的、人性化的用户体验</span>
				</p>
				<div className="mt-5 flex gap-10 text-xl select-none animation-show-delay-3">
					<a className='btn-scale btn-white px-4 py-1 text-black rounded-full shadow-lg underline-animation hover:before:w-[calc(100%-30px)]' href='#contact-us'>联系我们</a>
					<a className='btn-scale btn-white px-4 py-1 text-black rounded-full shadow-lg underline-animation hover:before:w-[calc(100%-30px)]' href='#join-us'>加入我们</a>
					<a className='btn-scale btn-white px-4 py-1 text-black rounded-full shadow-lg underline-animation hover:before:w-[calc(100%-30px)]' onClick={() => { window.open('https://github.com/VMatrixTeam') }}>Github主页</a>
				</div>
			</div>
		</div>
	)
}