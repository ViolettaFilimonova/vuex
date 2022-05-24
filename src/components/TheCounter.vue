<template>
  <h1>Counter</h1>
  <p>{{count}}</p>
  <button @click="increaseByOne" class="btn">Увеличить</button>
  <h2>Умножение на 3</h2>
  <p>{{$store.getters.multByThree}}</p>
  <button @click="asyncMultByFive">Ассинхронно умножить на 5</button>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'TheCounter',
  data(){
    return{

    }
  },
  computed: mapGetters(['count']),
  methods:{
    ...mapMutations(['increase']),
    ...mapActions(['asyncMultByFive']),
    increaseByOne(){
      this.increase( 1)
    }
  },
}
</script>