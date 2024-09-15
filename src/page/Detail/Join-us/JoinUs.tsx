import footer from '../../../assets/bg/foote.png'

import qacard1 from '../../../assets/contact/qacard1.png'
import qacard2 from '../../../assets/contact/qacard2.png'
import qacard3 from '../../../assets/contact/qacard3.png'
import qacard4 from '../../../assets/contact/qacard4.png'

import avatar1 from '../../../assets/avatars/avatar1.png'
import avatar2 from '../../../assets/avatars/avatar2.png'
import avatar3 from '../../../assets/avatars/avatar3.png'
import avatar4 from '../../../assets/avatars/avatar4.png'

import qrcode from '../../../assets/contact/qrcode.jpg'
import wechat from '../../../assets/contact/wechat.svg'
import qq from '../../../assets/contact/qq.svg'
import star from '../../../assets/contact/star.svg'
import mail from '../../../assets/contact/mail.svg'


const toGainInfo: { img: string, title: string, desc: string }[] = [
	{
		img: qacard1, title: '学习和分享', desc: '和超强队友一起学习，交流经验，全方位提升专业能力'
	},
	{
		img: qacard2, title: '做你想做的', desc: '产品、设计、运营、前端、服务端、后台……只要你愿意，都可以深度参与'
	},
	{
		img: qacard3, title: '职业与发展', desc: '一帮热情的师兄师姐提供各家大厂内推机会，一段扎实的项目经历，让你赢得面试官青睐'
	},
	{
		img: qacard4, title: '舒适的工作环境', desc: '专属的实验室自习座位，零食、空调、饮水机、高速无线网络一应俱全'
	},
]
const toDoInfo: { avatar: string, job: string }[] = [
	{ avatar: avatar1, job: '技术研发' },
	{ avatar: avatar2, job: '产品' },
	{ avatar: avatar3, job: '设计师' },
	{ avatar: avatar4, job: '运营' },
]
const contactInfo: { img: string, detail: string }[] = [
	{
		img: wechat, detail: `扫描二维码关注Matrix公众号`
		// !检测还要用用state算了……${window.innerWidth > 640 ? '左侧' : '上方'}
	},
	{
		img: qq, detail: '用户交流群：206284035'
	},
	{
		img: star, detail: '官网：https://matrix.sysu.edu.cn'
	},
	{
		img: mail, detail: '邮箱：admin@matrix.moe '
	}
]
export default function JoinUs() {
	return (
		<div className="w-screen min-h-screen relative snap-end pt-20 flex flex-col items-center overflow-y-auto overflow-x-hidden">
			{/* // !？？？在一开始的基础上去掉h-screen就行了？？？？麻了绕路 */}
			{/* // ！snap-end并不一定需要h-screen！不用反而可以简单实现正常的页面滚动！ */}
			<p className='my-5 py-4 border-t-4 border-blue-400 text-center text-4xl z-10'>加入我们</p>
			<div className='my-4'>
				<p className="w-full text-center text-xl text-blue-300">我能获得什么？</p>
				<div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1 gap-5 justify-center">
					{toGainInfo.map((item, index) =>
						<div key={index} className="w-52 p-5 bg-white rounded-lg shadow-lg flex flex-col">
							<img src={item.img} alt={item.title} />
							<ul className='text-xl text-blue-300 mb-3'>{item.title}</ul>
							<p>{item.desc}</p>
						</div>
					)}
				</div>
			</div>
			<div className='my-4'>
				<p className="w-full text-center text-xl text-blue-300">我能做些什么？</p>
				<div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1 gap-5 justify-center">
					{toDoInfo.map((item, index) =>
						<div key={index} className="w-32 p-5 bg-white rounded-lg shadow-lg flex flex-col items-center">
							<img src={item.avatar} alt={item.job} />
							<p className='text-xl text-blue-300 my-2'>{item.job}</p>
						</div>
					)}
				</div>
			</div>
			<button className='btn-scale btn-blue px-8 py-1 rounded-full' onClick={() => { window.open('https://mp.weixin.qq.com/s/PgrMyDtQspBM-nJVlW9PbQ') }}>查看详情</button>
			<div className="w-full h-[400px] sm:h-80"></div>
			<div className="w-full min-h-[400px] sm:min-h-80 absolute bottom-0 mt-16 pt-20 object-cover" style={{ backgroundImage: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
				{/* //!为什么h就一定要个min呢？哪个拦着你这么高了？overflow-auto？ */}
				{/* <img className='absolute bottom-0 object-cover pointer-events-none' draggable={false} src={footer} alt="" /> */}
				<h2 className='w-full text-2xl text-white text-center'>Contact Us</h2>
				<div className="w-[600px] mt-4 flex flex-col sm:flex-row items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
					{/* <div className=""></div> */}
					<img className='size-20 sm:size-32 mr-5' src={qrcode} alt="Matrix on Wechat" />
					<div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-4 text-white">
						{contactInfo.map((item, index) =>
							<div key={index} className="flex items-center">
								<img src={item.img} alt="" className="" />
								<span className="ml-5 text-nowrap">{item.detail}</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>

	)
}