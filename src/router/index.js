import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home.vue"
//懒加载模式（懒汉式）
const Editor = ()=>import('../views/Editor.vue')
const Simulator = ()=>import('../views/Simulator.vue')
const Mapper = ()=>import('../views/Mapper.vue')
const Differ = ()=>import('../views/Differ')


Vue.use(VueRouter)

const routes = [

	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},

	{
		path: '/editor',
		component: Editor
	},
	{
		path: '/simulator',
		component: Simulator
	},
	{
		path: '/mapper',
		component: Mapper
	},
	{
		path:'/differ',
		component: Differ
	}
	
]

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

export default router
