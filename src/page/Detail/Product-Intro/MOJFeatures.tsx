import feature1 from '../../../assets/Product-Intro/ojfeature1.png'
import feature2 from '../../../assets/Product-Intro/ojfeature2.png'
import feature3 from '../../../assets/Product-Intro/ojfeature3.png'
import feature4 from '../../../assets/Product-Intro/ojfeature4.png'
const MOJDetailInfo: {
	title: string,
	description: string,
	image: string
}[] = [
		{
			title: "精选的C/C++题库",
			description: `我们发布高质量的C/C++题目
基础巩固，提高水平
总有适合您的那一道`,
			image: feature1
		},
		{
			title: "详细的测评结果",
			description: `您每一次提交
都会形成详细清楚的成绩报告，
直到您在下一次提交中取得进展。`,
			image: feature2
		},
		{
			title: "直观的个人分析",
			description: `定时更新的做题情况和排名区间
记录您的每一次进步
帮助您更好地了解自己。`,
			image: feature3
		},
		{
			title: "友好的用户体验",
			description: `用户永远是MOJ的核心
我们着眼细节，追求品质
只为让您拥有更好的使用体验。`,
			image: feature4
		},

	]
export default function MOJFeatures() {

	return (
		<div className="w-full min-h-[50vh] overflow-hidde pt-20 sm:p-10 relative z-10 rounded-lg shadow-xl flex items-center justify-center snap-end filter backdrop-blur-md">
			{/* // !嗯用50vh而不是400px后snap才稳定不会回滚 */}
			{/* //!注意overflow-hidden和animation，至少和scale的不兼容！ */}
			<div className={`w-fit grid grid-cols-1 grid-rows-4 sm:grid-cols-4 sm:grid-rows-1 items-start gap-1 sm:gap-5 animation-MOJ-detail`}>
				{/* grid-rows-3 sm:grid-rows-1 sm: */}
				{/* // ！这里差点以为animation和snap不兼容，但是其实本质是animation带有scale所以导致卡顿！ */}
				{/* //!这里不能用left-1/2的做法不然会导致grid内部元素极其奇怪 */}
				{MOJDetailInfo.map((item, index) => (
					<div key={index} className="sm:max-w-64 h-full px-4 py-10 bg-whit shadow-lg shadow-blue-400 relative rounded-lg flex flex-col items-center ">
						{/* w-full sm: */}
						{/* // td？？？为什么加了bg-white就不显示图片了？？？ */}
						{/* gap-10 */}
						<h2 className="text-xl font-bold text-blue-400 mb-5 relative">{item.title}</h2>
						<p className="w-full h-fit whitespace-pre-wrap relative">{item.description}</p>
						{/* // !使用whitespace允许换行！ */}
						<div className="size-64"></div>
						<img src={item.image} alt={item.title} className="h-64 absolute bottom-10 object-cover -z-10 bg-transparent dark:brightness-75" />
					</div>
				))}
			</div>
		</div>
	)
}