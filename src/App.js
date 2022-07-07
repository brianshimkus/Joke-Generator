import { useState } from 'react'
import { useEffect } from 'react'

function App() {
	const [joke, setJoke] = useState('')
	useEffect(() => {
		const fetchJoke = async () =>
			await fetch(`http://api.icndb.com/jokes/random`)
				.then((res) => res.json())
				.then((data) => {
					setJoke(data.value.joke)
				})

		fetchJoke()
	}, [])

	return (
		<div className='bg-slate-700 min-h-screen text-gray-300 text-center p-8 lg:p-24'>
			<div className='bg-slate-600 border-2 border-slate-500 rounded-md p-12 max-w-xl m-auto'>
				<h1 className='text-2xl text-rose-300 font-semibold'>Joke Generator</h1>
				<h2 className='my-12 text-lg'>{joke}</h2>
				<button className='bg-rose-400 text-rose-900 uppercase font-semibold text-lg p-4 rounded-md hover:bg-rose-300 transition ease-in-out duration-300'>
					Generate Joke
				</button>
			</div>
		</div>
	)
}

export default App
