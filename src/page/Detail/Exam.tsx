import illuExam from '../../assets/illuexam.jpg'
export default function Exam() {
	return (

		<div id='exam' className="w-screen h-screen relative snap-end pt-20">
			<div className="absolute top-1/2 -translate-y-1/2 flex flex-col sm:flex-row items-end sm:items-center">
				<div className='w-full h-52 sm:w-96 p-10 sm:p-0 sm:pl-10 -mb-44 sm:mb-0 flex flex-col sm:gap-10 shrink-0 z-10'>
					<p className='text-4xl font-bold'>考试系统</p>
					<p className='text-gray-500 '>支持在线编程考试和在线理论考试，可选择实时评测或定时评测</p>
					<button className='btn-scale btn-blue max-w-[450px] px-4 py-1 rounded-full shadow-xl shadow-blue-300'>进入考试系统</button>
				</div>
				<div className="flex- overflow-hidden">
					{/* //!md必须加个div才能用flex-1 */}
					<img className='w-full sm:w-[600px max-h- object-fill' src={illuExam} alt="Course System" />
				</div>
			</div>
		</div>
	)
}