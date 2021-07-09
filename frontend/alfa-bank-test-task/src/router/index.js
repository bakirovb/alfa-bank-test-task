import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/Home.vue'
import Users from '../components/Users/Users.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/user', component: Users }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
