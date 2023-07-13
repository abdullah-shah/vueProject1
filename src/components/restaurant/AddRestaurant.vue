<script setup>
import {ref, computed} from 'vue';
const restaurantList = ref([]);
const restaurant = ref({
    name: '',
    address:'',
    dishes:[]
});
const selectedDish = ref('');
const dishOptions = ['biryani', 'white quorma', 'KFC fried chicken', 'chinese rice', 'kofta', 'cake'];
const resetForm = () => {
    restaurant.value = {
        name: '',
        address:'',
        dishes:[]
    }
}
const isTouchedName = ref(false);
const isTouchedAddress = ref(false);

const isValidName = computed(()=> restaurant.value.name.trim() !== '');
const isValidAddress = computed(()=> restaurant.value.address.trim() !== '');
const isValidForm = computed(()=> isValidName.value && isValidAddress.value);
const addRestaurant = () =>{
    restaurantList.value.push({...restaurant.value, dishes:[...restaurant.value.dishes]});
    resetForm();

}
const addDish = () => {
    if(selectedDish.value && !restaurant.value.dishes.includes(selectedDish.value)){
        restaurant.value.dishes.push(selectedDish.value);

    }
    selectedDish.value = '';
  }


</script>
<template>
    <div class="container">
        <h2 >Add New Restaurant</h2>
        <form @submit.prevent="addRestaurant" novalidate>
            <label for="restaurantName">Restaurant Name</label>
            <input id="restaurantName" v-model="restaurant.name" @input="isTouchedName = True" required/>
            <span v-if="isTouchedName && !isValidName" class="error">Name is required</span>
            <br>
            <label for="restaurantAddress">Restaurant Address</label>
            <input id="restaurantAddress" v-model="restaurant.address" @input="isTouchedAddress = True" required/>
            <span v-if=" isTouchedAddress && !isValidAddress" class="error">Address is required</span>
            <br>
            <label for="dishes">Dishes</label>
            <select v-model="selectedDish">
                <option value="">Select A Dish</option>
                <option  
                    v-for="dish in dishOptions" 
                    :key="dish" 
                    :value="dish"
                    >{{ dish }}
                </option>
            </select>
            <button type="button" @click="addDish" :disabled="!selectedDish">Add Dish</button>
            <div v-if="restaurant.dishes.length">
                <ul>
                    <li v-for="dish in restaurant.dishes" :key="dish">{{ dish }}</li>
                </ul>
            </div><br>
            <button type="submit" :disabled="!isValidForm" :class="{error: !isValidForm}">Add New Restaurant</button>
        </form>
        <div>
            <h2>Restaurant List</h2>
            <ul>
            <li v-for="restaurant in restaurantList" :key="restaurant.name">
            <b>{{ restaurant.name }}</b> is located at {{ restaurant.address }}
            and offers: <span v-for="dish in restaurant.dishes" :key="dish"><em>{{ dish + ' '}}</em></span><br>
            </li>
        </ul>
        
        </div>
            
    </div>
    
</template>
<style scoped>
h2{
    font-weight: 700;
}
.container {
    display:flex;
    flex-direction: column;
    align-items:center;
    background-color:#fafafa
}
input {
    padding:0.5rem;
    margin:0.5rem;
}
label{
    margin-right:1rem;
}
</style>
