import illuCourse from '../../../assets/Product-Intro/illucourse.png'
import iconCourse from '../../../assets/Product-Intro/iconcourse.svg'
import iconJudge from '../../../assets/Product-Intro/iconjudge.svg'
import iconLibrary from '../../../assets/Product-Intro/iconlibrary.svg'

const featureInfo: { leadingImg: string, content: string }[] = [
	{ leadingImg: iconCourse, content: '课程：支持多门课程管理，涵盖课程作业、课程成员、课程讨论等模块' },
	{
		leadingImg: iconJudge, content: '评测：支持C、C++在线评测，抄袭检查，数据统计及批量导出'
	},
	{
		leadingImg: iconLibrary, content: '题库：通过添加原子题目、创建题库、关联课程等实现老师/TA出题功能'
	},
]
export default function Course() {
	return (
		<div id='course' className="w-screen h-screen relative snap-end pt-20 overflow-hidde">
			<div className="h-full">
				<div className="overflow-hidde absolute top-1/4 sm:top-1/2 -translate-y-1/4 sm:-translate-y-1/2 animation-show-early">
					{/* //!！！！！！！！！！md下次注意父元素有overflow-hidden也会无效！！！！！ */}
					{/* //!同时似乎也不能应用在img上 */}
					{/* //!md必须加个div才能用flex-1 */}
					<img className='w-[700px] max-h-full object-fill dark:brightness-75' src={illuCourse} alt="Course System" />
				</div>
				<div className='w-full h-96 sm:w-96 p-10 sm:p-0 sm:pr-10 mt-0 absolute bottom-0 sm:right-[calc(1/2*(100vw-700px))] sm:translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 flex sm:gap-5 flex-col shrink-0 z-10 animation-show'>
					<p className='text-4xl font-bold'>课程系统</p>
					<p className='text-gray-500 '>Matrix Course系统支持多门课程管理，支持5种题型从出题到做题、做题到改题的所有基本功能。支持C/C++在线评测、抄袭检查、数据统计及批量导出。</p>
					{featureInfo.map((item, index) =>
						<li key={index} className='flex'>
							<img className='size-10 mr-4 dark:brightness-75' src={item.leadingImg} alt="Course" />
							<ul>{item.content}</ul>
						</li>
					)}
					<button className='btn-scale btn-blue max-w-[450px] px-4 py-2 rounded-full shadow-xl shadow-blue-300' onClick={() => { window.open('https://matrix.sysu.edu.cn') }}>进入课程系统</button>
				</div>
			</div>
		</div>
	)
}