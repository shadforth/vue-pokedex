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

html, body {
  overflow: hidden;
}

body {
  background-color: #D93E39;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  margin: 50px;
}

/* Types */
.type-box {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.175rem 0.5rem 0.160rem 0.5rem;
  margin: 7px 7.5px 7px 0;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #FFFFFF;
}

.bug {
  background-color: #ABB642;
}

.dark {
  background-color: #6C584A;
}

.dragon {
  background-color: #6843EF;
}

.electric {
  background-color: #F2D054;
}

.fairy {
  background-color: #E29DAC;
}

.flying {
  background-color: #A493EA;
}

.fighting {
  background-color: #B13C31;
}

.fire {
  background-color: #E28544;
}

.ghost {
  background-color: #6C5A94;
}

.grass {
  background-color: #8BC560;
}

.ground {
  background-color: #DBC074;
}

.ice {
  background-color: #A6D6D7;
}

.normal {
  background-color: #A8A77D;
}

.poison {
  background-color: #94489B;
}

.psychic {
  background-color: #E66388;
}

.rock {
  background-color: #B4A04A;
}

.steel {
  background-color: #B8B8CE;
}

.water {
  background-color: #6F91E9;
}

.icon-stop2,
.vue-sound__playback-time-wrapper,
.volume-toggle,
.icon-paragraph-justify,
.vue-sound__extern-wrapper {
  display: none !important;
}

.icon-play3:before {
  content: "\EA26";
}

</style>
