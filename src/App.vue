<script>
import sampleComponent from './components/sampleComponent.vue';
import headerComponent from './components/headerComponent.vue'
import singleCardComponent from './components/singleCardComponent.vue';

import axios from 'axios';

import {store} from "./store.js"

export default {
  components: {
    sampleComponent,
    headerComponent,
    singleCardComponent
},
  data() {
    return {
      store,      
    }
  },
  methods:{
    getFilm: function(){
      const apiKey = '0f1e651dc5ef9906aed9cf33cdc65253'; 
      const apiUrl = 'https://api.themoviedb.org/3/search/movie'; 
      const params = {
        query: store.queryToSearch,
      };

      axios.get(apiUrl, {
        params: {
          ...params,
          api_key: apiKey, // Adding the API key as a query parameter
        },
      })
        .then(response => {
          // console.log('Response:', response.data.results);
          store.filmResults = response.data.results
          console.log(store.filmResults)
          
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  },
  created(){
    this.getFilm()

  }
}
</script>

<template>
  <headerComponent @search = "getFilm()"/>
  <section class = "container mx-auto text-3xl py-8">
    <ul class = "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-2">
      <singleCardComponent
          v-for="item in store.filmResults"
          :key = "item.id" 
          :name = "item.title" 
          :originalName = "item.original_title"
          :lang = "item.original_language"
          :vote = "item.vote_average"
      />
    </ul>
  </section>
</template>

<style scoped>

</style>
