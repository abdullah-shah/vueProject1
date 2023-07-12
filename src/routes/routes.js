import { createRouter, createWebHistory } from 'vue-router';
import AddRestaurant from '../components/restaurant/AddRestaurant.vue';
import CustomGrid from '../components/Grid/CustomGrid.vue'
import Home from '../components/Home.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/AddRestaurant', component: AddRestaurant },
    { path: '/CustomGrid', component: CustomGrid }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;