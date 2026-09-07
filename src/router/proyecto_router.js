/* eslint-disable */ 
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Libros from '../views/Libros.vue'
import DetalleLibro from '../views/DetalleLibro.vue'
import Descripcion from '../views/Descripcion.vue'
import Opiniones from '../views/Opiniones.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/libros', name: 'Libros', component: Libros},
  { 
    path: '/libros/:sku', 
    name: 'DetalleLibro', 
    component: DetalleLibro,
    children: [
      { path: 'descripcion', component: Descripcion },
      { path: 'opiniones', component: Opiniones }
    ]
  },
  { path: '/inicio', redirect: '/' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
