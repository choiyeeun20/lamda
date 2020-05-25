import axios from 'axios'

const state = {
    context : 'http://localhost:5000/',
    bugsmusic : []
}
const actions = {
    async search({commit},searchWord){
        alert('검색어: '+searchWord)
        axios.post(state.context+`bugsmusic`,searchWord,{
            authorization: 'JWT fefege..',
            Accept : 'application/json',
            'Content-Type': 'application/json'
        })
            .then(({data})=>{
                alert('검색된 결과 수 : '+data.count)
                commit('SEARCH', data)
            })
            .catch(()=>{
                alert('통신 실패 !')
            })
    }

}
const mutations = {

}
const getters = {
    bugsmusic : state => state.bugsmusic
}

export default {
    name: 'crawling',
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}
