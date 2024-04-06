<template>
    <div class="flex flex-col p-8">
    <input type="text" class="rounded border-2 border-gray-50 w-full" placeholder="Search for meals"/>
    <div class="flex justify-center gap-1 mt-2">
        <router-link :to ="{name : 'byLetter', params: { letter } }" v-for="letter of letters" :key='letter'>{{ letter }}</router-link>
    </div>
    <pre>{{ ingredient }}</pre>
    </div>
</template>

<script setup>//composition api
import {computed, onMounted , ref} from  'vue'
import store from '../store'
import axiosClint from '../axiosClint.js'


const meals = computed(()=>store.state.meals) //properiety
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const ingredient = ref([])
onMounted(async()=>{//or then
  const response = await axiosClint.get('/list.php?i=list')
    console.log(response.data)
    ingredient.value = response.data
    })
</script>
