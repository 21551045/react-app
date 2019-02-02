import React, { Component } from 'react'
import BaseFooter from '@components/base/Footer'
import { find, findActive, music, musicActive, account, accountActive, friend, friendActive, vedio, vedioActive } from '@images/base/footer'
import './style.scss'

class Footer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			list: [
				{
					active: false,
					icon: find,
					activeIcon: findActive,
					title: '发现',
					path: '/'
				},
				{
					active: false,
					icon: vedio,
					activeIcon: vedioActive,
					title: '视频',
					path: '/vedio'
				},
				{
					active: false,
					icon: music,
					activeIcon: musicActive,
					title: '我的',
					path: '/myMusic'
				},
				{
					active: false,
					icon: friend,
					activeIcon: friendActive,
					title: '朋友',
					path: '/friends'
				},
				{
					active: false,
					icon: account,
					activeIcon: accountActive,
					title: '账号',
					path: '/account'
				}
			]
		}
		this.changeRoute = this.changeRoute.bind(this)
	}
  
	componentWillMount() {
		console.log('this.props :', this.props)
	}
	
	changeRoute(item) {
		// this.props.history.push(item.path)
	}
  
	render() {
		return (
			<div className='footer-container'>
				<BaseFooter list={this.state.list} changeRoute={this.changeRoute}></BaseFooter>
			</div>
		)
	}
}

export default Footer