<script>
import {store} from "../store"

export default {
  data() {
    return {
      store,
      selected: "All"
    }
  },
  methods:{
    select(selected){
      this.selected = selected
      store.selectedCategory = this.selected
      console.log(this.selected)
    }
  },
  created(){

  }
  
}
</script>

<template>
  <div class="container mx-auto">
    <div class = "
    flex flex-col justify-between items-center
    text-center
    ">
      <h1 class = "text-red-600 font-bold text-8xl pt-4">BOOLFLIX</h1>
      <div>
        <ul class = "
        flex flex-col
        md:flex-row
        text-4xl
        gap-8
        text-red-600

        ">
          <li @click = "select('All')" class = "hover:underline">All</li>
          <li @click = "select('Movies')" class = "hover:underline">Movies</li>
          <li @click = "select('TV')" class = "hover:underline">TV Series</li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
*{
  font-family: 'Bebas Neue', sans-serif;
}
</style>
