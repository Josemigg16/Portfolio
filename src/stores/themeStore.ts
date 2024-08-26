import { atom } from 'nanostores'
const theme = (() => {
	if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
		return localStorage.getItem('theme') as 'dark' | 'light'
	}
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark'
	}
	return 'light'
})()
export const themeStore = atom(theme)
