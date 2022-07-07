import { useEffect } from 'react'

function App() {
	useEffect(() => {
		const fetchJoke = async () =>
			await fetch(`http://api.icndb.com/jokes/random`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data.value.joke)
				})

		fetchJoke()
	}, [])

	return (
		<div className='bg-slate-700 min-h-screen text-gray-300 py-24 text-center'>
			<h1>Joke Generator</h1>
		</div>
	)
}

export default App
