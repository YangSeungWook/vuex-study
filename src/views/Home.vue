<template>
  <div class="home">
    Parent counter : {{getCounter}}<br />
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <Child v-bind:num="$store.state.counter" />
    <hr>
    <button @click="newsGogo">뉴스고고</button>
    <ul>
      <li v-for="(item,idx) in getNews" v-bind:key="idx">
        {{item.title}}
      </li>
    </ul>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Child from '@/components/Child.vue'
import { mapGetters, mapMutations } from 'vuex';
import axios from 'axios';

const config = {
  baseUrl : "https://api.hnpwa.com/v0/"
}

export default {
  name: 'Home',
  computed : {
    ...mapGetters([
    'getCounter',
    'getNews'
  ]),
    nice(){
      console.log(11)
    }
  },
  components : {
    Child : Child
  },
  data(){
    return {
      counter : 0,
      //newsList : this.$store.getters.getNews,
    }
  },
  methods : {
    async newsGogo(){
      try{
        const news =  await axios.get(`${config.baseUrl}news/1.json`);
        console.log(news+'호출1')
        this.$store.dispatch('FETCH_NEWS',news).then(()=>{
          console.log('완료?')
        }).catch((error) =>{
          console.log(error)
        })
        console.log(news+'호출2')

        return news;
       
      }catch(e){
        console.log(e)
      }
    },
    subCounter(){
      this.$store.state.counter--;
    },
    /* 아래는 뮤테이션 방법 - 동기작업에서 사용하자
    addCounter(){
      this.$store.commit('addCounter',{
        value : 10,
        arr : ["a","b","c"]
      });
    },
    ...mapMutations({
      addCounter : 'addCounter'
    }),
    */
    addCounter(){
      var el = this;
      async function nice(){
        await el.$store.dispatch('addCounter',{
          by : 50,
          duration : 1000
        }).then(()=>{
          console.log('굿')
        })

        
      }


      nice();

      
      
    }
  },
};
</script>
