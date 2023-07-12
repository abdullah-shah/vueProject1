<script setup>
import { ref } from 'vue';
import CustomGrid from './components/Grid/CustomGrid.vue'
import Header from './components/Header.vue';
import AddRestaurant from './components/restaurant/AddRestaurant.vue';
</script>

<template>
  <div >
    <Header/>
    <router-view></router-view>
    
  
  </div>
</template>

<style >
header {
  padding: 10px;
  display: flex;
  background-color: #f0f0f0;
  align-content: flex-end;
}
header nav{
  margin-left: auto;
  flex-grow: 1;
}
nav ul {
  display: flex;
  align-items: center;
  list-style-type: none;
}
nav ul li{
  padding: 0.5rem;
  margin: 0.5rem 1rem;
}


</style>
