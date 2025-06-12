import { render } from 'preact'
import { hotreload } from './dev/hook'
import { Widget } from './Widget'
import css from './index.css?inline'

function createWidget() {
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
}
document.addEventListener('DOMContentLoaded', createWidget)

hotreload(createWidget)
