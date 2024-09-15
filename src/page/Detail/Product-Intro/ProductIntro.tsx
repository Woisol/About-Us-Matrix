import naviCourse from '../../../assets/btn/navcourse.jpg'
import naviExam from '../../../assets/btn/navexam.jpg'
import naviOJ from '../../../assets/btn/navoj.jpg'
const productNaviInfo: { title: string, img: string, href: string }[] = [
	{
		title: '课程系统',
		img: naviCourse,
		href: 'course'
	},
	{
		title: '考试系统',
		img: naviExam,
		href: 'exam'
	},
	{
		title: 'MOJ',
		img: naviOJ,
		href: 'MOJ'
	}
]
export default function ProductIntro() {
	return (
		// <>
		<div id='product-intro' className="w-screen h-screen relative snap-end pt-20">
			<p className='my-10 py-4 absolute left-1/2 -translate-x-1/2 border-t-4 border-blue-400 text-center text-4xl z-10'>产品介绍</p>
			<div className="w-full absolute left-1/2 top-[calc(50%+60px)] -translate-x-1/2 -translate-y-1/2 grid grid-rows-3 md:gap-10 sm:grid-rows-1 sm:grid-cols-3 select-none animation-show">
				{productNaviInfo.map((item, index) => (
					<a key={index} className="w-full flex flex-col justify-center items-center group btn-scale" onClick={() => document.getElementById(item.href)!.scrollIntoView({ behavior: 'smooth' })}>
						{/* //!很奇怪的用href有时smooth有时依然是直接跳转js就稳定 href={`#${item.href}`} */}
						{/* //td非常奇怪现在是MOJ无法平滑跳转…… */}
						<img className='size-48 sm:size-64 object-fill' src={item.img} alt="" />
						<span className='text-xl transition-all group-hover:text-blue-400 z-10'>{item.title}</span>
					</a>
				))}
			</div>
		</div>

		//  </>

	)
}