import logo_white from '../assets/logo/logo-white.png'
import bgstart1 from '../assets/bg/bgstart1.png'
// !用svg似乎在过度拉长的时候右边都变成直线了……
export default function Page_Home() {
	return (
		<div className="w-screen h-screen relative snap-start bg-gradient-to-t from-blue-200 to-blue-500">
			<div className="w-fit absolute left-1/2 sm:left-20 -translate-x-1/2 sm:translate-x-0 top-1/2 -translate-y-1/2 transition-all">
				<h1 className="text-9xl text-white font-bold">MATRIX </h1>
				<h2 className="text-4xl text-white font-bold">
					打造最优秀的计算机类课程管理系统和在线评测系统<br />
					提供稳定的、人性化的用户体验
				</h2>
				<div className="mt-5 flex gap-10 text-xl select-none">
					<a className='btn-scale btn-white px-4 py-1 rounded-full shadow-lg underline-animation hover:before:w-[calc(100%-20px)]'>联系我们</a>
					<a className='btn-scale btn-white px-4 py-1 rounded-full shadow-lg underline-animation hover:before:w-[calc(100%-20px)]'>加入我们</a>
					<a className='btn-scale btn-white px-4 py-1 rounded-full shadow-lg underline-animation hover:before:w-[calc(100%-20px)]'>Github主页</a>
				</div>
			</div>
			<img className='max-w-full h-screen p-5 object-contain absolute right-1/2 sm:right-5 top-1/2 translate-x-1/2 sm:translate-x-0 -translate-y-1/2 opacity-10 pointer-events-none' draggable={false} src={logo_white} alt="" />
			<img className='w-full h-1/3 absolute bottom-0 object-cover pointer-events-none' draggable={false} src={bgstart1} alt="" />
		</div>
	)
}