import illuOJ from '../../../assets/Product-Intro/illuoj.jpg'
export default function MOJ({ windowInnerWidth }: { windowInnerWidth: number }) {
	return (
		<div id='MOJ' className={`w-screen h-screen relative snap-end pt-20 overflow-hidde ${windowInnerWidth > 640 ? 'animation-MOJ' : ''}`}>
			<div className="h-full">
				<div className="flex- overflow-hidde absolute top-1/4 sm:top-1/2 -translate-y-1/4 sm:-translate-y-1/2 animation-show">
					{/* //!md必须加个div才能用flex-1 */}
					<img className='w-[500px] max-h-full object-fill' src={illuOJ} alt="MOJ" />
				</div>
				<div className='w-full h-72 sm:w-96 p-10 sm:p-0 sm:pr-10 mt-0 absolute bottom-0 sm:top-1/2 sm:-translate-y-1/2 sm:right-[calc(1/2*(100vw-500px))] sm:translate-x-1/2 flex sm:gap-5 flex-col shrink-0 z-10 animation-show-early'>
					<p className='text-4xl font-bold'>MOJ</p>
					<p className='text-gray-500 '>MOJ 全称 Matrix Online Judge，是一款在线评测系统。该系统旨在为中大学生提供一个高效<br />
						稳定的代码评测环境，以激发同学们的编程热情、提升同学们的编程水平。</p>
					<button className='btn-scale btn-blue max-w-[450px] px-4 py-1 rounded-full shadow-xl shadow-blue-300'>MOJ 维护中，暂时无法访问
					</button>
				</div>
			</div>
		</div>
	)
}