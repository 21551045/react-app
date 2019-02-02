import Home from '@pages/Home'
import Account from '@pages/Account'
import Friends from '@pages/Friends'
import Vedio from '@pages/Vedio'
import MyMusic from '@pages/MyMusic'

const routes = [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/account',
		component: Account
	},
	{
		path: '/friends',
		component: Friends
	},
	{
		path: '/vedio',
		component: Vedio
	},
	{
		path: '/myMusic',
		component: MyMusic
	}
]

export default function getRoutes() {
	return routes
}