<script setup>
import { ref, computed } from 'vue';
const isTouchedText = ref(false);
let todos=ref([]);
let todoItem = ref({
    id:0,
    text:'',
    isCompleted: false,
})

const isValidTodo = computed(()=>todoItem.value.text.trim() !== '')
const remainingTodosCounter = computed(()=>todos.value.filter((item)=> item.isCompleted !== true).length);

const addNewTodo = () => {
    const id = todos.value.length + 1;
    todos.value.push({...todoItem.value, id})
    resetForm();
}
const deleteTodo = (todo)=>{
    todos.value = todos.value.filter((item)=> item !== todo)
}
const toggleComoplete = (todo)=>{
    todos.value = todos.value.map(item=>{
        if(item.id !== todo.id){
            return item;
        }
        else {
            item.isCompleted = !item.isCompleted;
            
            return item;
        }
    })
}
const resetForm=()=>{
    todoItem.value = {
        text:''
    }
    isTouchedText.value = false;
}
</script>
<template>
<div class="container" >
    <h2 style="margin-bottom: 2rem; font-weight: 500;">To Do List</h2>
    

    <div class="form">
        <form @submit.prevent="addNewTodo" novalidate>
            <label for="todo">Add New Task:</label>
            <input 
            v-model="todoItem.text" 
            @input="isTouchedText = True" 
            required
            />
            <button :disabled="!isValidTodo">Add Todo</button>
        </form>
    <div v-if="todos.length > 0" id="todo-list-section">
        <ul>
            <li 
            v-for="todo in todos" 
            :key="todo.id"
            @click="toggleComoplete(todo)">
            <span v-if="todo.isCompleted" class="completed">{{ todo.text }}</span><span v-else>{{ todo.text }}</span>
            <span @click="deleteTodo(todo)" class="delete-todo-span" title="delete item">X</span>
        </li>
        </ul>
    </div>
    </div>
    Todos Left: {{ remainingTodosCounter }}
    <h3 style="margin-top: 30px;">the complete todos list is here:</h3><pre>{{ todos }}</pre>
</div>
</template>

<style scoped>
.container {
    display: flex;
    width: 100vw;
    height: 80vh;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin:3rem 1rem;
}
form {
    display: flex;
    align-content: center;
}
.delete-todo-span {
    cursor: pointer;
    padding: 3px 5px;
    margin: 0 1rem;
    color:white;
    font-weight: 900;
    background-color:red;
    width:20px;
    height: 20px;
    border-radius: 40%;
}
#todo-list-section {
    margin: 2rem auto;
}
.completed{
    text-decoration: line-through;
}
</style>