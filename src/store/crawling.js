import axios from 'axios'

const state={
    context:`http://localhost_5000/`,
    bugmusic:[]
}
const actions ={
    async search({commit},searchWord){
        axios.post(
            state.context+`bugsmusic`,searchWord,{
                    authorization: 'JWT fefege..',
                    Accept : 'application/json',
                    'Content-Type': 'application/json'
            })
            .then(()=>{
                alert('검색된 결과 수:' + data.count)
                commit('SEARCH',data)
            })
            .catch(()=>{
                alert('통신실패 !!')
            })
    }
}
const mutations={
    SEARCH(state,data){
        state.bugsmusic = []
        data.forEach(item =>{
            alert(item)
            state.bugsmusic.push([])
        })
    }
}
const getters ={
    bugsmusic :  state => state.bugsmusic

}
export default {
    name : 'crawling',
    namespaced: true,

}


