import { render } from 'preact'
import Widget from './Widget'
import './dev.css'

const wrapper = document.createElement('div')
document.body.appendChild(wrapper)

const shadow = wrapper.attachShadow({ mode: 'open' })

const style = document.createElement('style')
style.textContent = `@import "/src/index.css"`
shadow.appendChild(style)

const root = document.createElement('div')
shadow.appendChild(root)

render(<Widget />, root)
