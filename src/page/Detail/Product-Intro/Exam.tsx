import illuExam from '../../../assets/Product-Intro/illuexam.png'
export default function Exam() {
	return (

		<div id='exam' className="w-screen h-screen relative snap-end pt-20 overflow-hidde">
			<div className="w-full h-full flex flex-col sm:flex-row items-end sm:items-center justify-between">
				<div className="max-w-full absolute bottom-20 sm:static flex sm:flex-1 items-center justify-center">
					<div className='w-full max-w-[600px] p-10 sm:pr-10 mt-0 flex gap-5 flex-col shrink-0 z-10 animation-show-early'>
						<p className='text-4xl font-bold'>考试系统</p>
						<p className='text-gray-500 '>支持在线编程考试和在线理论考试，可选择实时评测或定时评测</p>
						<button className='btn-scale btn-blue max-w-[450px] px-4 py-1 rounded-full shadow-xl shadow-blue-300' onClick={() => { window.open('https://matrix.sysu.edu.cn') }}>进入考试系统</button>
					</div>
				</div>
				<div className="w-[700px] max-h-full overflow-hidde -ml-72 md:-ml-48 lg:ml-0 animation-show-early">
					{/* //!md必须加个div才能用flex-1 */}
					<img className='w-full h-full sm:w-[600px max-h- object-fill dark:brightness-75' src={illuExam} alt="Exam System" />
				</div>
			</div>
		</div>
	)
}