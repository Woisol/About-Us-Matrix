import illuExam from '../../../assets/Product-Intro/illuexam.jpg'
export default function Exam() {
	return (

		<div id='exam' className="w-screen h-screen relative snap-end pt-20 overflow-hidde">
			<div className="h-full">
				<div className='w-full h-56 sm:w-64 p-10 sm:p-0 sm:pl-10 mt-0 absolute bottom-0 sm:top-1/2 sm:-translate-y-1/2 sm:left-[calc(1/2*(100vw-500px))] sm:-translate-x-1/2 flex sm:gap-5 flex-col shrink-0 z-10 animation-show'>
					<p className='text-4xl font-bold'>考试系统</p>
					<p className='text-gray-500 '>支持在线编程考试和在线理论考试，可选择实时评测或定时评测</p>
					<button className='btn-scale btn-blue max-w-[450px] px-4 py-1 rounded-full shadow-xl shadow-blue-300'>进入考试系统</button>
				</div>
				<div className="flex- overflow-hidde absolute right-0 top-1/4 sm:top-1/2 -translate-y-1/4 sm:-translate-y-1/2 animation-show">
					{/* //!md必须加个div才能用flex-1 */}
					<img className='w-[500px] max-h-full sm:w-[600px max-h- object-fill' src={illuExam} alt="Exam System" />
				</div>
			</div>
		</div>
	)
}