// HTML
// ============================================================================
<template>
  <div class="pokemon-container">
    <b-form-group>
      <b-form-input id="exampleInput2"
                        type="text"
                        v-model="search"
                        required
                        placeholder="Search for a Pokémon">
      </b-form-input>
    </b-form-group>
    <b-button v-on:click="onSearchPokemon" variant="primary">Search</b-button>
    <hr>
    <div class="pokemon" v-show="found">
      <img v-bind:src="pokemon.image" v-bind:alt="pokemon.name" />
      <h3>{{ pokemon.name | capitalise }}</h3>
      <div v-for="type in pokemon.types" :key="type">{{ type | capitalise }}</div>
      <p> {{ pokemon.description }} </p>
    </div>
  </div>
</template>

// JavaScript
// ============================================================================
<script>
import axios from 'axios';

export default {
  name: 'Pokemon',
  data () {
    return {
      search: '',
      found: true,
      pokemon: {
        name: '',
        description: '',
        types: [],
        image: ''
      }
    }
  },
  methods: {
    onSearchPokemon: function() {
      console.log('Clicked on search...');
      axios.get('https://pokeapi.co/api/v2/pokemon/' + this.search)
        .then(response => {
          this.pokemon.name = response.data.name;
          for (var index in response.data.types) {
            this.pokemon.types.push(response.data.types[index].type.name);
          }
          this.pokemon.image = response.data.sprites.front_default;
        })
        .catch(error => {
          console.log(error);
        });
      axios.get('https://pokeapi.co/api/v2/pokemon-species/' + this.search)
        .then(response => {
          this.pokemon.description = response.data.flavor_text_entries[1].flavor_text
        })
        .catch(error => {
          console.log(error);
        });
        this.found = true;
    }
  }
}
</script>

// CSS
// ============================================================================
<style scoped>
</style>