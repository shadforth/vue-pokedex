// HTML
// ============================================================================
<template>
  <div id="app">
    <Pokedex/>
  </div>
</template>

// JavaScript
// ============================================================================
<script>
import Pokedex from './components/Pokedex'

export default {
  name: 'app',
  components: {
    Pokedex
  }
}
</script>

// CSS
// ============================================================================
<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';

body {
  background-color: #F62459;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFF;
  margin: 50px;
}

</style>
