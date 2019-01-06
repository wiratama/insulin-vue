import Vue from 'vue';
import VueRouter from 'vue-router';
import AutoRoute from './generatedRoute'
Vue.use(VueRouter);

// import Index from './pages/index.vue';
// import Client from './pages/client.vue';
// import ClientId from './pages/client/id.vue';

const Index = () => import('./pages/index.vue')
const Client = () => import('./pages/client.vue')
const ClientId = () => import('./pages/client/id.vue')


let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/home',
			component: Index,
			name: 'home'
		},
		{
			path: '/client',
			component: Client,
			name: 'client'
		},
		{
			path: '/client/id',
			component: ClientId,
			name: 'clientdetail'
		},
	],
	// routes: AutoRoute,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
});

export default router;