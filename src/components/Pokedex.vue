// HTML
// ============================================================================
<template>
  <div class="pokedex-container">
    <h1>{{ msg }}</h1>
    <Pokemon/>
  </div>
</template>

// JavaScript
// ============================================================================
<script>
import Pokemon from './Pokemon';

export default {
  name: 'Pokedex',
  components: {
    Pokemon
  },
  data () {
    return {
      msg: 'Pokédex'
    }
  }
}
</script>

// CSS
// ============================================================================
<style scoped>
</style>
