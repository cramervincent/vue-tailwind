import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes =  [
    {
        path: "/",
        name: "Index",
        component: Home
    }
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;