<script>
import LangFlag from 'vue-lang-code-flags';


export default {
  components:{
    LangFlag
  },
  props:{
    name: String,
    originalName: String,
    lang: String,
    vote: Number,
    cover: String
  },
  data() {
    return {
      hover: false,
    }
  },
  computed:{
    checkOriginalName(){
      if(this.name == this.originalName){
        return false
      }
      else{
        return true
      }
    },
    finalImgUrl(){
      if(this.cover != null){
        return `https://image.tmdb.org/t/p/w342/${this.cover}`
      }else{
        return `src/assets/posternotfound.png`
      }
    },
    ratingTransform(){
      let roundedVote = Math.round(this.vote / 2);
      let thisArr = [];
      if (roundedVote < 1){
        roundedVote = 1
      }
      for (let index = 0; index < roundedVote; index++) {
        thisArr.push('<i class="fa-solid fa-star fa-2xs" style="color: #ff0000;"></i>');
      }
      while (thisArr.length < 5){
          thisArr.push('<i class="fa-regular fa-star fa-2xs" style="color: #ff0000;"></i>')
        }
      return thisArr.join(" ");
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
      rounded-lg
      p-4
      overflow-y-auto
      text-center 
      cursor-pointer
      "
      @pointerenter="hover = true"
      @pointerleave="hover = false">
      <div class = "relative">
        <img
        :src="finalImgUrl"
        class = "w-[342px] rounded-lg transition-all"
        :class = "{'blur' : hover}">

        <div v-if = "hover" class =
            "
            p-4
            text-white
            absolute
            z-1
            top-0
            left-0
        ">

          <div
            class = "
            flex flex-col items-center
            mb-4
          ">
          <lang-flag :iso="lang.toLowerCase()" :squared="false" class = "flag mb-1"/>

          <div class ="bg-[rgba(0, 0, 0, 0.5)]" v-html="ratingTransform">
            
          </div>
        </div>
        <span class = "text-lg">
          Title:
        </span>
          <h2>
            {{ name }}
          </h2>
          <div v-if = "checkOriginalName">
            <span class = "text-lg">
              Original Title:
            </span>
            <h2>
              {{ originalName }}
            </h2>
          </div>
        </div>
        </div>
      </li>
  
</template>

<style scoped>

*:not(i){
  font-family: 'Poppins', sans-serif;
}
.flag{
  position: static!important;
}
</style>
