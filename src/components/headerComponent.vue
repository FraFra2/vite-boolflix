<script>
import { store } from "../store.js"
import navBarComponent from './navBarComponent.vue'

export default {
  data() {
    return {
      store,
      classes: "border border-slate-500 px-8 py-4 text-2xl rounded-2xl mx-4 xl:px-2 py-1"
    }
  },
  components:{
    navBarComponent
  }
}
</script>

<template>
  <header class = "bg-gray-900">
    
    <navBarComponent/>
    
    <div class = "flex justify-center items-center py-8 xl:pb-8">

      <div class = "flex flex-col gap-y-2 sm:flex-row">
        <input v-model = "
        store.queryToSearch" 
        type="text" 
        :class = "classes"
        >
        <button 
        @click = "$emit('search')"
        :class = "classes"
        class = "text-white">
          Search
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
  
</style>
