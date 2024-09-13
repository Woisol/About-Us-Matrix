import illuOJ from '../../assets/illuoj.jpg'
export default function MOJ() {
	return (
		<div id='MOJ' className="w-screen h-screen relative snap-end pt-20">
			<div className="absolute top-1/2 -translate-y-1/2 flex flex-col sm:flex-row sm:items-center justify-evenly">
				<div className="flex- overflow-hidden">
					{/* //!md必须加个div才能用flex-1 */}
					<img className='w-[500px] max-h- object-fill' src={illuOJ} alt="Course System" />
				</div>
				<div className='w-full h-52 sm:w-96 p-10 sm:p-0 sm:pr-10 -mt-20 sm:mt-0 flex sm:gap-5 flex-col shrink-0'>
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