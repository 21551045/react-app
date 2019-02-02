import React, {Component} from 'react'
import {
	Switch,
	Route
} from 'react-router-dom'
import getRoutes from '@router'
import Footer from '@components/display/Footer'
import '@styles/initial.scss'

function RouteWithSubRoutes(route) {

	return (
		<Route
			exact={
				route.exact
			}
			path = {
				route.path
			}
			getComponent = {
				(location, cb) => {
					// 做一些异步操作去查找组件
					cb(null, route.component)
				}
			}
		/>
	)
}

class App extends Component {
	render() {
		return (
			<div className="App" >
				<Switch > {
					getRoutes().map((route, i) => (
						<RouteWithSubRoutes
							key={i}
							{...route}
						/>
					))
				}
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default App