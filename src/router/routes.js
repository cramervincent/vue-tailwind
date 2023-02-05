import { createRouter, createWebHistory } from 'vue-router'



const routes =  [
    {
        path: "/",
        name: "MainLayout",
        component: () => import('../views/HomeLayout.vue'),
        children:[
          {path:'', name:'home', component:() => import('../pages/HomePage.vue')}
        ]
    }
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;