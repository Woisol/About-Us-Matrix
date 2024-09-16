const naviInfo: { title: string, href: string }[] = [
	{ title: '产品介绍', href: 'product-intro' },
	{ title: '团队介绍', href: 'team-intro' },
	{ title: '加入我们', href: 'join-us' },
	{ title: '联系我们', href: 'contact-us' },
]
export default function Header({ curPage, windowInnerWidth }: { curPage: number, windowInnerWidth: number }) {
	return (
		<div className="w-screen h-20 shadow-lg sticky top-0 z-50 filter backdrop-blur-lg select-none">
			<div className="w-fit h-20 absolute left-1/2 -translate-x-1/2 flex justify-center">
				<div className="btn-scale w-28 md:w-52 h-full px-5 py-2 absolute opacity-50 box-border transition-all duration-300" style={{ left: `${curPage * (windowInnerWidth > 768 ? 13 : 7)}rem` }}>
					<div className="size-full rounded-lg shadow-lg bg-blue-600"></div>
				</div>
				{naviInfo.map((item, index) =>
					<a key={index}
						// href={`#${item.href}`}
						onClick={() => document.getElementById(item.href)!.scrollIntoView({ behavior: 'smooth' })}
						className={` btn-scale w-28 md:w-52 h-full relative text-center transition-all duration-300 ${index === curPage ? 'text-white dark:text-blue-200' : ''}`}>
						<span className="box-border absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-nowrap">{item.title}</span>
					</a>)}
			</div>
		</div>
	)

}