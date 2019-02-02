import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.scss'

const BaseFooter = props => {

	const {list,changeRoute} = props

	return (
		<ul className="footer-list">
			{list.map(item => {
				return (
					<li className="footer-item" key={item.path} onClick={() => { changeRoute(item) }}>
						<Link to={item.path}>
							{item.active && <img className="footer-item-icon" src={item.activeIcon} alt='' />}
							{!item.active && <img className="footer-item-icon" src={item.icon} alt='' />}
							<div className="footer-item-title">{item.title}</div>
						</Link>
						
					</li>
				)
			})}
		</ul>
	)
}

BaseFooter.propTypes = {

}

export default BaseFooter
