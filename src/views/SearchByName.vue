<template> 
<div>
    <div class="p-8 pb-0">
         <input type="text" 
         v-model="keyword"
         class="rounded border-2 border-gray-50 w-full" 
         placeholder="Search for meals"
         @change="searchMeals"/> 
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow rounded-xl" >
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl h-48 w-full object-cover">
            </router-link>
            <div class="px-3">
                <h3 class=" font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, non.</p>
            <div class="flex item-center justify-between">
                <a href="meal.strYoutube" target="_blank"
                 class="px-3 py-2 rounded border-2 border-red-600 bg-red-500  hover:bg-red-600 text-white transition-colors">
                 YouTube
                 </a>
                <!-- <router-link  
                class="px-3 py-2 rounded border-2 border-purple-600 bg-purple-500  hover:bg-purple-600 text-white transition-colors">
                View
                </router-link> -->
            </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script setup>
import { onMounted,ref }from 'vue'
import store from '../store'
import { computed } from '@vue/reactivity'
import { useRoute } from "vue-router"

const route=useRoute()
const keyword=ref("")
const meals = computed(()=> store.state.searchedMeals)
function searchMeals(){
    //axiosClint.get(`search.php?s=${keyword.value}`)// making request and  save the info in the store
      if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }

}

onMounted(()=>{
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals()
    }
})
</script>