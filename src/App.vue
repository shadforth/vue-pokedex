<template>
  <div id="app">
    <Pokedex />
  </div>
</template>

<script>
import Pokedex from "./components/Pokedex";

export default {
  name: "app",
  components: {
    Pokedex
  }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import url("https://fonts.googleapis.com/css?family=Titillium+Web");
@import "assets/css/colours";

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

/* Type box */
.type-box {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.175rem 0.5rem 0.16rem 0.5rem;
  margin: 3px 7.5px 3px 0;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.5;
  color: $white;
}

.type-box-sml {
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

@media only screen and (max-width: 500px) {
  #app {
    margin: 10px 2px;
  }
  .col {
    padding: 0;
  }
  .table th,
  .table td {
    padding: 0.35rem;
  }
}
</style>
