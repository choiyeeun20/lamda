import axios from 'axios'
import router from "@/router";

const state ={
    context : 'http://localhost:5000/',
    soccer : []
}
const actions ={
    async search({commit},searchWord) {
        axios.get(state.context + 'soccer/'+searchWord)
            .then(({data})=>{
                alert("action 진입")
                commit("SEARCH",data)
                router.push("/Home");
            })
            .catch(()=>{
                alert('축구통신실패!')
            })

    }
}
const mutations = {
    SEARCH() {
        alert("mutation 진입")
    }
}
const getters = {}




export  default {
    name:'soccer',
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}