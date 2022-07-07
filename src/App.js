import { useRef, useState } from 'react'
import useRandomJoke from './useRandomJoke'

function App() {
	const firstNameRef = useRef(null)
	const lastNameRef = useRef(null)

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	const joke = useRandomJoke(firstName, lastName)

	const generateJoke = (e) => {
		e.preventDefault()
		setFirstName(firstNameRef.current.value)
		setLastName(lastNameRef.current.value)
	}

	return (
		<div className='bg-slate-700 min-h-screen text-gray-300 text-center p-8 lg:p-24'>
			<div className='bg-slate-600 border-2 border-slate-500 rounded-md p-12 max-w-2xl m-auto'>
				<h1 className='text-2xl text-rose-300 font-semibold'>Joke Generator</h1>
				<h2 className='my-12 text-lg'>{joke}</h2>
				<form className='md:flex'>
					<input
						placeholder='First name'
						ref={firstNameRef}
						className='bg-slate-700 border-2 border-slate-500 rounded-md p-4 h-16 mr-4 text-rose-300 w-full md:w-min-4 mb-4 md:mb-0'
					/>
					<input
						placeholder='Last name'
						ref={lastNameRef}
						className='bg-slate-700 border-2 border-slate-500 rounded-md p-4 h-16 mr-4 text-rose-300 w-full md:w-min-4 mb-4 md:mb-0'
					/>
					<button
						onClick={generateJoke}
						className='bg-rose-400 text-rose-900 uppercase font-semibold text-lg p-4 rounded-md hover:bg-rose-300 transition ease-in-out duration-300 w-full'>
						Generate
					</button>
				</form>
			</div>
		</div>
	)
}

export default App
