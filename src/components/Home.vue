<script setup>
import {ref} from 'vue';
const msg = ref('Home')
</script>
<template >
    <h1>Hello from {{ msg }}</h1>
</template>
<style scoped>
h1{
    text-align:center;
}
</style>