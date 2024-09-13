import { useState } from "react";

const naviInfo: { title: string, href: string }[] = [
	{ title: '产品介绍', href: 'product-intro' },
	{ title: '团队介绍', href: 'team-intro' },
	{ title: '加入我们', href: 'join-us' },
	{ title: '联系我们', href: 'contact-us' },
]
export default function Header() {
	const [curPage, setCurPage] = useState(0);
	return (
		// <div className="w-screen h-screen snap-start">
		<div className="w-screen h-20 flex justify-center shadow-lg sticky top-0 z-50 filter backdrop-blur-lg">
			{naviInfo.map((item, index) => <a key={index} href={`#${item.href}`} className={`w-52 h-full relative text-center ${index === curPage ? 'text-blue-300 border-b-2 border-blue-400' : ''}`}><span className="box-border absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-nowrap">{item.title}</span></a>)}
			{/* //~~无法在里面加span来垂直居中不然会出现溢出的奇怪问题…… */}
			{/* //！box-sizing的问题！！！ */}
		</div>
		// </div>
	)

}