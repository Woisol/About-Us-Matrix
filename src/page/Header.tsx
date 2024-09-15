import { useState } from "react";

const naviInfo: { title: string, href: string }[] = [
	{ title: '产品介绍', href: 'product-intro' },
	{ title: '团队介绍', href: 'team-intro' },
	{ title: '加入我们', href: 'join-us' },
	{ title: '联系我们', href: 'contact-us' },
]
export default function Header({ curPage, windowInnerWidth }: { curPage: number, windowInnerWidth: number }) {
	// const [curPage, setCurPage] = useState(0);
	return (
		// <div className="w-screen h-screen snap-start">
		<div className="w-screen h-20 shadow-lg sticky top-0 z-50 filter backdrop-blur-lg select-none">
			{/* //!无法使用left-1/2居中…… */}
			<div className="w-fit h-20 absolute left-1/2 -translate-x-1/2 flex justify-center">
				{/* <div className="w-full h-20 absolute left-0 border-b-4 border-blue-400 animation-tab"></div> */}
				{/* //!笑死进度根本对不上 */}
				<div className="w-28 md:w-52 h-full px-5 py-2 absolute opacity-50 box-border transition-all duration-300" style={{ left: `${curPage * (windowInnerWidth > 768 ? 208 : 112)}px` }}>
					<div className="size-full rounded-lg shadow-lg bg-blue-600"></div>
				</div>
				{naviInfo.map((item, index) =>
					<a key={index} onClick={() => document.getElementById(item.href)?.scrollIntoView({ behavior: "smooth" })}
						className={`w-28 md:w-52 h-full relative text-center transition-all duration-300 ${index === curPage ? 'text-white' : ''}`}>
						{/*  ${index === curPage ? 'text-blue-300 border-b-2 border-blue-400' : ''} */}
						<span className="box-border absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-nowrap">{item.title}</span>
					</a>)}
			</div>
			{/* //~~无法在里面加span来垂直居中不然会出现溢出的奇怪问题…… */}
			{/* //！box-sizing的问题！！！ */}
			{/* href={`#${item.href}`} */}
		</div>
		// </div>
	)

}