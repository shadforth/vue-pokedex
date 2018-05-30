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
import Pokedex from './components/Pokedex';

export default {
  name: 'app',
  components: {
    Pokedex
  }
}
</script>

// CSS
// ============================================================================
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import url("https://fonts.googleapis.com/css?family=Titillium+Web");
@import 'assets/css/colours';

body {
  border-top: 4px solid $red;
}

#app {
  font-family: "Titillium Web", Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  margin: 0;
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

@media only screen
  and (max-width: 500px) {
    #app {
      margin: 10px 2px;
    }
    .col {
      padding: 0;
    }
    .table th, .table td {
      padding: 0.35rem;
    }
}
</style>
