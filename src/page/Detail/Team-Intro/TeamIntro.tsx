import photo1 from '../../../public-not/photo1.jpeg'
// import photo1 from '../../../public-not/photo1.jpeg'
import photo2 from '../../../public-not/photo2.jpeg'
import photo3 from '../../../public-not/photo3.jpeg'
export default function TeamIntro() {
	return (
		<div id='team-intro' className="w-screen min-h-screen relative snap-end p-20">
			<div className="w-full flex justify-center">
				<p className='my-10 pt-4 absolut left-1/2 -translate-x-1/ border-t-4 border-blue-400 text-center text-4xl z-10'>团队介绍</p>
			</div>
			{/* //!这种文档流的还是少用absolute不然重叠巨难改…… */}
			<div className="w-full h-fit absolut top-1/ left-1/ -translate-x-1/ -translate-y-1/ animation-show">
				{/* <div className=" w-full min-h-40"></div> */}
				<span className="w-full">Matrix团队隶属于中山大学数据科学与计算机学院（软件学院），由来自全校不同院系的同学组成，旨在打造中大最优秀的计算机类课程管理系统和在线评测系统，并以此为中心开发其他有关产品，提供更好、更稳定的用户体验。</span>
				<div className="w-full h-[400px] mt-4 grid grid-cols-3 grid-rows-2 gap-5">
					<img src={photo1} alt="team-photo" className="w-full h-full rounded-lg shadow-lg object-cover dark:brightness-75 " />
					<img src={photo2} alt="team-photo" className="w-full h-full rounded-lg shadow-lg object-cover dark:brightness-75 col-span-2 row-span-2" />
					<img src={photo3} alt="team-photo" className="w-full h-full rounded-lg shadow-lg object-cover dark:brightness-75 " />
				</div>
			</div>
		</div>

	)
}