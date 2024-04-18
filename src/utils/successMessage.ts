interface Params {
	type: 'success' | 'error'
    message: string
}

export const successMessage = ({ type, message }: Params) => {
	const successMessage = document.querySelector('.success-message') as HTMLSpanElement

	successMessage.classList.add(`text-${type === 'success' ? 'green' : 'red'}-400`)
	successMessage.classList.add('animate-fadeIn')
	successMessage.innerText = message
	setTimeout(() => {
		successMessage.classList.remove('animate-fadeIn')
		successMessage.classList.remove(`text-${type === 'success' ? 'green' : 'red'}-400`)
	}, 3000)
}
