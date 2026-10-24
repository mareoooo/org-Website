import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AboutView from '@/views/AboutView.vue'
import Officers from '@/views/Officers.vue'
import EventsView from '@/views/EventsView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/officers', name: 'officers', component: Officers },
    { path: '/events', name: 'events', component: EventsView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 140, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
