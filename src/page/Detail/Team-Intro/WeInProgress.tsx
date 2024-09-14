import courseEiter from '../../../assets/courseiter.svg'
export default function WeInProgress() {
	return (
		<div className="w-screen h-screen relative snap-end p-10 overflow-hidden">
			<p className='my-10 py-4 absolute left-10 border-b-4 border-blue-400 text-center text-4xl z-10'>一路走来的我们</p>
			<iframe data-v-7b8a56cc="" src={courseEiter} className="w-full h-full"></iframe>
		</div>
	)
}