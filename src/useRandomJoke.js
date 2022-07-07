import { useEffect, useState } from 'react'

export default function useRandomJoke() {
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

	return joke
}
