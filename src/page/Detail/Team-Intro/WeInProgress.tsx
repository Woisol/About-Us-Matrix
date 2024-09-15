import courseEiter from '../../../assets/courseiter.svg'
export default function WeInProgress({ windowInnerWidth }: { windowInnerWidth: number }) {
	// td这里找不到当初用的什么库，只能使用svg，对移动端的支持也不好……
	return (
		<div className="w-screen h-screen relative snap-end p-10 overflow-hidden">
			<p className='my-10 py-4 absolute left-10 border-b-4 border-blue-400 text-center text-4xl z-10'>一路走来的我们</p>
			{windowInnerWidth > 640 ?
				<iframe data-v-7b8a56cc="" src={courseEiter} className="w-full h-full animation-show"></iframe> :
				<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-blue-300">此资源在移动端暂时无法查看，请使用桌面端浏览器查看</p>
			}
		</div>
	)
}