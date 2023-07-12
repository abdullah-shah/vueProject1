<script setup>
import {ref} from 'vue';
const msg = ref(' From Toggle Content')
const isOpen = ref(true);
</script>
<template >
    <div class="container">
    <h1 v-if="isOpen">Hello {{ msg }}</h1>
    <!-- <h2 v-else>Hello Vue.</h2> -->
    <button @click="isOpen = !isOpen">{{isOpen? 'Hide Content': 'Show Content'}}</button>
    
</div>
</template>
<style scoped>
h1{
    text-align:center;
}
.container {
    position: relative;
    height:50vh
}
button{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);

}
</style>