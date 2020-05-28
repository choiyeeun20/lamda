import axios from 'axios'
import router from '@/router'

const state = {
    context : 'http://localhost:5000/',
    naver : [],
    count :0
}

const actions ={
    async search({commit},searchWord){
        axios.get(state.context+`naver/`+searchWord)
            .then(({data})=>{
                alert("action 진입")
                commit('SEARCH', data)
                router.push('/NaverMovie')
            })
            .catch(()=>{
                alert("통신 실패 !!!!!")
            })
    }

}

const mutations ={
    SEARCH(state,data){
       alert("뮤테이션에서 결과수:"+data.count)
        state.naver=[]
        state.count = data.count()
        data.list.forEach(item=>{
            state.naver.push({
                seq: item.seq,
                title:item.title
            });
        });

    }

};

const getters ={
    naver: state => state.naver,
    count :  state => state.count


}




export default {
    name : 'naver',
    namespaced : true,
    state,
    actions,
    mutations,
    getters

}