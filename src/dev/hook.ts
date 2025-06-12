import.meta.env.DEV && import('./dev.css')

export function hotreload(createWidget: () => void) {
	if (import.meta.hot) {
		import.meta.hot.accept(() => {
			document.getElementById('web-widget')?.remove()
			createWidget()
		})
	}
}
