export default function DarkModeSwitcher({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (value: boolean) => void }) {
	return (
		<div className={`w-20 h-10 p-1 absolute top-5 right-10 rounded-full cursor-gra transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`} onClick={() => setDarkMode(!darkMode)}>
			<div className={`size-8 relative rounded-full overflow-hidden transition-all duration-300 ${darkMode ? 'bg-gray-200 translate-x-10' : 'bg-yellow-200'}`}>
				<div className={`size-7 bg-gray-700 rounded-full transition-all duration-300 ${darkMode ? '-translate-x-2 -translate-y-' : '-translate-x-10 -translate-y-5'}`}></div>
			</div>
		</div>
	)
}
