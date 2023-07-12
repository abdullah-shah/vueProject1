<script setup>
import {ref} from 'vue';

</script>
<template>
    
    <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
            <router-link to="/AddRestaurant">Add New Restaurant</router-link>
            <router-link to="/CustomGrid">AG Grid Component</router-link>
          </li>
        </ul>
      </nav>
</template>
<style scoped>
ul li a {
    padding: 0.5rem;
    margin: 0 1rem;
}
.router-link-active {
    text-decoration:underline;
}
</style>