import axiosClint from "../axiosClint"

export function searchMeals({ commit },keyword){
    axiosClint.get(`search.php?s=${keyword}`)// making request and  save the info in the store
    .then(({ data })=>{
        debugger;
        commit('setSearchedMeals',data.meals)
    })
}