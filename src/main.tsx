import { render } from 'preact'
import Widget from './Widget'
import css from './index.css?inline'

import.meta.env.DEV && import('./dev.css')

document.addEventListener('DOMContentLoaded', () => {
	const wrapper = document.createElement('div')
	wrapper.id = 'web-widget'
	document.body.appendChild(wrapper)

	const shadow = wrapper.attachShadow({ mode: 'open' })

	const style = document.createElement('style')
	style.textContent = css
	shadow.appendChild(style)

	const root = document.createElement('div')
	shadow.appendChild(root)

	render(<Widget />, root)
})
