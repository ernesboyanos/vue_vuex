import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas: [                
      {nombre: 'banana', cantidad: 0},
      {nombre: 'manzana', cantidad: 0},
      {nombre: 'peras', cantidad: 0},
  ] 
  },
  getters: {
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    reiniciar(state){
      state.frutas.forEach(elemento => {
        elemento.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
