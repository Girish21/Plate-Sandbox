import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'tippy.js/animations/scale.css'
import 'tippy.js/dist/tippy.css'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)
