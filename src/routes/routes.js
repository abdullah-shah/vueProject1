import { createRouter, createWebHistory } from 'vue-router';
import AddRestaurant from '../components/restaurant/AddRestaurant.vue';
import CustomGrid from '../components/Grid/CustomGrid.vue'
import Home from '../components/Home.vue'
import TodoList from '../components/todoList/TodoList.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/TodoList', component: TodoList },
    { path: '/AddRestaurant', component: AddRestaurant },
    { path: '/CustomGrid', component: CustomGrid }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;