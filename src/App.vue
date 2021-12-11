<template>
  <div id="app">
    
    <joke-button></joke-button>

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
  }
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
