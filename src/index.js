import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { HashRouter  } from 'react-router-dom'
import '@utils/index'

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>, document.getElementById('root'))
  
serviceWorker.unregister()
