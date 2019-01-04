const Index = () => import(/* webpackChunkName: "index" */ '@/pages/index.vue')
const Client = () =>
  import(/* webpackChunkName: "client" */ '@/pages/client.vue')
const ClientIndex = () =>
  import(/* webpackChunkName: "client-index" */ '@/pages/client/index.vue')

export default [
  {
    name: 'index',
    path: '/',
    component: Index
  },
  {
    path: '/client',
    component: Client,
    children: [
      {
        name: 'client-index',
        path: '',
        component: ClientIndex
      }
    ]
  }
]
