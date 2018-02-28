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
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
  background-color: #D93E39;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  margin: 25px;
}

/* Vue audio */
.icon-stop2,
.vue-sound__playback-time-wrapper,
.volume-toggle,
.icon-paragraph-justify,
.vue-sound__extern-wrapper {
  display: none !important;
}

.icon-play3::before {
  content: "\EA26" !important;
}

</style>
