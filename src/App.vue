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
          store.filmResults.push(...response.data.results)
          console.log(response.data.results)

          
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    getSeries: function(){
      const apiKey = '0f1e651dc5ef9906aed9cf33cdc65253'; 
      const apiUrl = 'https://api.themoviedb.org/3/search/tv'; 
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
          console.log(response.data.results)
          store.serieResults.push(...response.data.results)
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    performSearch: function(){
      store.filmResults = [],
      store.serieResults = []
      this.getFilm();
      this.getSeries();
    }
  },
  created(){
    this.performSearch();

  }
}
</script>

<template>
  <headerComponent @search = "performSearch()"/>
  <main>
    <section class = "container mx-auto text-3xl pb-8">
      <!-- FILM -->
      <div class = "text-center text-red-600 py-6 text-6xl">
        <h2>
          FILM
        </h2>
      </div>
      <div>
        <ul class = "grid grid-cols-1 justify-items-center md:grid-cols-3 xl:grid-cols-5 gap-2">
          <singleCardComponent
              v-for="item in store.filmResults"
              :key = "item.id" 
              :name = "item.title" 
              :originalName = "item.original_title"
              :lang = "item.original_language"
              :vote = "item.vote_average"
              :cover = "item.poster_path"
          />
        </ul>
      </div>

      <!-- SERIE TV -->
      <div class = "text-center text-red-600 py-6 text-6xl">
        <h2>
          SERIE TV
        </h2>
      </div>
      <div>
        <ul class = "grid grid-cols-1 justify-items-center md:grid-cols-3 xl:grid-cols-5 gap-2">
          <singleCardComponent
              v-for="item in store.serieResults"
              :key = "item.id" 
              :name = "item.name" 
              :originalName = "item.original_name"
              :lang = "item.original_language"
              :vote = "item.vote_average"
              :cover = "item.poster_path"
          />
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
h2{
  font-family: 'Bebas Neue', sans-serif;
}
main{
  background: rgb(17,24,39);
  background: linear-gradient(180deg, rgba(17,24,39,1) 25%, rgba(48,48,48,1) 75%);
}
</style>
