import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
 state : {
   counter : 0,
   news : [],
 },
 getters : {
   getCounter : function(state){
     return state.counter;
   },
   getNews : function(state){
     return state.news
   }
 },
 mutations : {
   addMutation : function(state,payload){
     state.counter = payload.by
   },
   SET_NEWS(state,el){
     state.news = el;
     console.log(el)
   }
 },
 actions : {
  addCounter : function(context,payload){
    console.log(context)
    return setTimeout(function(){
      context.commit('addMutation',payload)
      
    },payload.duration)
   },
   async FETCH_NEWS({commit},payload){
     try{
       //console.log(payload.data)
      //const response = await fetchNewsList();
      commit("SET_NEWS",payload.data);
     }catch(error){
      console.log(error)
     }
   }
 }
})
