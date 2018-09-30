import Vue from 'vue'
import Router from 'vue-router'	

Vue.use(Router)

import about from '../components/about'
import works from '../components/works'
import articles from '../components/articles'
import page404 from '../components/page404'
const routes = [
	{
		path: '/',
		component: about
	},
	{
		path: '/works',
		component: works
	},
	{
		path: '/blog',
		component: articles
	},
	{
		path: '*',
		component: page404
	},


]

export default new Router({
	routes,
	mode: 'history'
})
