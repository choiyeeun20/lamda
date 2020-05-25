import Vue from 'vue';
import Vuex from 'vuex';
import crawling from './crawling';

Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
       crawling
    }
})