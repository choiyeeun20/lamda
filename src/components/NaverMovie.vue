<template>
    <div>
        <div class="top">
            <div >
                <table>
                    <tr>
                        <td>
                            <router-link to = "/"><img class="logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" height="30" width="92"></router-link>
                        </td>
                        <td>
                            <input id="search" type="text" style="background-repeat: no-repeat;" title="검색" :placeholder="searchWord">
                        </td>
                        <button id="search_btn" type="submit" tabindex="3" class="btn_submit">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/41HeL2cy9LL.png" height="30" width="30">
                            <span class="ico_search_submit"></span>
                        </button>
                    </tr>
                </table>
            </div>
        </div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">순위</th>
                    <th class="text-left">영화명</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in naver" :key="item.seq">
                    <td>{{item.seq}}</td>
                    <td>{{item.title}}</td>

                </tr>
                </tbody>
            </template>
        </v-simple-table>

        <div class="text-xs-center">
            <v-pagination :length="6" v-model="page"></v-pagination>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return {
                page:1,
            };
        },
        computed:{
            ...mapState({
                naver: state => state.crawling.naver
            })
        }
    };
</script>

<style scoped>
    .top  {
        margin-top:28px;
        margin-bottom:28px;
    }
    .logo {
        vertical-align: middle;
        margin-left:24px;
        margin-right:24px;
    }
    #search{
        display: block;
        width: 550px;
        height: 50px;
        font-size: 15pt;
        border: 1px solid #EAEAEA;
    }
    .btn_submit {
        width: 55px;
        height: 55px;
        background-color: #fff;
    }
    button{
        font-size: 12px;
        line-height: 16px;
        color: #000;
    }
    button{
        margin: 0;
        padding: 0;
    }
    button {
        -webkit-appearance: button;
        -webkit-writing-mode: horizontal-tb !important;
        text-rendering: auto;
        color: buttontext;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
        cursor: default;
        background-color: buttonface;
        box-sizing: border-box;
        margin: 0em;
        font: 400 13.3333px Arial;
        padding: 1px 6px;
        border-width: 2px;
        border-style: outset;
        border-color: buttonface;
        border-image: initial;
    }
</style>