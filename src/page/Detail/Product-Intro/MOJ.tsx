import illuOJ from '../../../assets/Product-Intro/illuoj.png'
export default function MOJ({ windowInnerWidth }: { windowInnerWidth: number }) {
	return (
		<div id='MOJ' className={`w-screen h-screen relative snap-end pt-20 overflow-hidde ${windowInnerWidth > 640 ? 'animation-MOJ' : ''}`}>
			<div className="w-full h-full flex flex-col sm:flex-row items-start sm:items-center justify-between">
				<div className="w-[700px] max-h-full overflow-hidde -mr-72 md:-mr-48 lg:mr-0 animation-show-early">
					<img className='w-full h-full object-fill dark:brightness-75' src={illuOJ} alt="MOJ" />
				</div>
				<div className="max-w-full absolute bottom-20 sm:static flex sm:flex-1 items-center justify-center">
					<div className='w-full max-w-[600px] p-10 sm:pl-10 mt-0 flex gap-5 flex-col shrink-0 z-10 animation-show-early'>
						<p className='text-4xl font-bold'>MOJ</p>
						<p className='text-gray-500 '>MOJ 全称 Matrix Online Judge，是一款在线评测系统。该系统旨在为中大学生提供一个高效<br />
							稳定的代码评测环境，以激发同学们的编程热情、提升同学们的编程水平。</p>
						<button className='btn-scal btn-blue max-w-[450px] px-4 py-1 rounded-full shadow-xl shadow-blue-300 cursor-not-allowed' onClick={(e) => { e.preventDefault(); (e.target as HTMLButtonElement).classList.add('animation-shake'); setTimeout(() => { (e.target as HTMLButtonElement).classList.remove('animation-shake'); }, 500); }}>MOJ 维护中，暂时无法访问
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}