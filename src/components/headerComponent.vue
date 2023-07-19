<script>
import { store } from "../store.js"
export default {
  data() {
    return {
      store,
      classes: "border border-slate-500 px-8 py-4 text-2xl rounded-2xl mx-4"
    }
  }
}
</script>

<template>
  <header class = "bg-gray-900 sticky top-0">
    <p class = "text-center">
      <h1 class = "text-red-600 font-bold text-8xl pt-4">BOOLFLIX</h1>
    </p>
    <div class = "flex justify-center items-center py-8">
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
  h1{
    font-family: 'Bebas Neue', sans-serif;
  }
</style>
