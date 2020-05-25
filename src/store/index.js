import Vue from 'vue';
import Vuex from 'vuex';
import crawling from './crawling';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        crawling
    }
})