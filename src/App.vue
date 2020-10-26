<template>
  <div id="app">
    <Table :influencers="INFLUENCERS" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Table from '@/components/Table.vue'

export default {
  name: 'App',
  data(){
    return{
      test: 'test'
    }
  },
  methods: {
    ...mapActions([
      'GET_INFLUENCERS'
    ])
  },
  mounted(){
    this.GET_INFLUENCERS()
  },
  computed:{
    ...mapGetters([
      'INFLUENCERS'
    ])
  },
  components: {
    Table
  }
}
</script>

<style>
body{
  height: 100vh;
  margin: 0;
  background-color: #DADADA;;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@media(max-width: 442px){
  #app{
    font-size: 12px;
  }
}

*{
  box-sizing: border-box;
}

a,button{
  outline: 0;
  text-decoration: none;
  color: #2c3e50;
}

a:hover,button:hover,
a:focus,button:focus{
  outline: 0;
  text-decoration: none;
  color: #2c3e50;
}
</style>
