<script>

export default {
  props:{
    name: String,
    originalName: String,
    lang: String,
    vote: Number
  },
  data() {
    return {
    }
  },
  methods:{
    
  },
  created(){

  }
  
}
</script>

<template>
  
<li 
      class = "
      border border-gray-900
      bg-red-400
      rounded-lg
      p-4
      h-[250px]
      overflow-y-auto
      text-center
      ">
        <h2>
          {{ name }}
        </h2>
        <h2>
          {{ originalName }}
        </h2>
        <h2>
          {{ lang }}
        </h2>
        <h2>
          {{ vote }}
        </h2>
      </li>
  
</template>

<style scoped>

</style>
