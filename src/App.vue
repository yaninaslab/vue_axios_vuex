<template>
  <div id="app">
    
    <joke-button></joke-button>
<h2>{{ joke }}</h2>
    <normal-joke></normal-joke>
    <snake-joke></snake-joke>
    <loud-joke></loud-joke>
  </div>
</template>

<script>
import JokeButton from './components/JokeButton.vue'
import NormalJoke from './components/NormalJoke.vue'
import SnakeJoke from './components/SnakeJoke.vue'
import LoudJoke from './components/LoudJoke.vue'

export default {
  name: 'App',
  components: {
    JokeButton,
    NormalJoke,
    SnakeJoke,
    LoudJoke,
  },
  computed: {
    joke() {
      var text = this.$store.state.joke; 
      var mode = this.$store.state.mode;
    
      if(mode === "snake") {
        return text.replace(/ /g,"_");
      }else if(mode === "uppercase") {
        return text.toUpperCase();
      }else {
        return text
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
