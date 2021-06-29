<template>
  <div class="hello">
    <hr>
    Child counter : {{getCounter}} <br />
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed : {...mapGetters([
    'getCounter'
  ]),
  
   childCounter(){
      this.$store.getters.getcounter;
    },
  }
    
  //props : ["num"]
}
</script>

