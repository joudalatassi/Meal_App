<template>
<div>
    <div class="w-[800px] mx-auto">
        <pre>{{ meal }}</pre>
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.srcMealThumb" :alt="meal.strMeal">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
        <div><strong class="font-bold"> Category: </strong> {{ meal.strCategory }}</div>
        <div><strong class="font-bold"> Area: </strong> {{ meal.strArea }}</div>
        <div><strong class="font-bold"> Tags: </strong> {{ meal.strTags }}</div>

    </div>
    </div>
</template>
<script setup>
import { onMounted , ref } from 'vue'
import axiosClint from '../axiosClint'
import { useRoute } from "vue-router"


const route=useRoute()
const meal = ref({})

onMounted(()=>{
axiosClint.get(`lookup.php?i=${route.params.id}`) 
.then(({ data })=>{
    debugger
    meal.value=data.meals[0] || {}
})   
})
</script>