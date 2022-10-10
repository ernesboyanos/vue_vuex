<template>
    <div class="container">

        <ul class="list-group">
            <li v-for="(item, index) of arrayOrdenado" :key="item.id" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center">
                {{index}} - {{item.nombre}}
                <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
            </li>

        </ul>
        <button @click="reiniciar" class="btn btn-danger btn-block">REINICIAR</button>
    </div>
  </template>
  
  <script>
var frutas2 = []
import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'MiLista',
    computed:{
        ...mapState(['frutas']),
        arrayOrdenado(){
            frutas2 = this.frutas
            return frutas2.sort( (a , b) => b.cantidad - a.cantidad )
        }
    },
    methods: {
        ...mapMutations(['aumentar', 'reiniciar'])
        
    }
  }
  </script>
  
