import { useEffect, useState } from 'react'

export default function useRandomJoke(firstName, lastName) {
	const [joke, setJoke] = useState('')

	useEffect(() => {
		const fetchJoke = async () =>
			await fetch(
				`//api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
			)
				.then((res) => res.json())
				.then((data) => {
					setJoke(data.value.joke)
				})

		fetchJoke()
	}, [firstName, lastName])

	return joke
}
