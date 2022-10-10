<template>
  <div class="container">
      
        <div class="card-columns">
          <div class="card">
            <img  width="50" src="./assets/logo.png" alt="">
            <div class="card-body">
              <h4 class="card-title">Vuex</h4>
              <p class="card-text">      This application performs the following reactive operations:<br>
      1) Clicking adds amounts.<br>
      2) As the quantities increase, the elements are rearranged.<br>
      It also implements a "Store" and "Mutations"</p>
            </div>
          </div>

        </div>  
      


      <HelloWorld msg=""/>
      <MiLista msg=""/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MiLista from './components/mi-lista.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MiLista
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
