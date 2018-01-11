// HTML
// ============================================================================
<template>
  <b-container fluid>
    <div class="col-md-8 col-centred">
      <h1>{{ title }}</h1>
      <b-row>
          <!-- Selection -->
          <b-col>
            <b-form-select class="mb-3" v-model="selected" :select-size="10">
              <option v-for="item in list" :key="item.name">{{ item.name }}</option>
            </b-form-select>
          </b-col>
          <!-- Information -->
          <b-col>
            <div v-show="selected">
              <h3>{{ pokemon.id }} {{ pokemon.name }}</h3>
              <div class="type-box" v-for="type in pokemon.types" :key="type" v-bind:class="type">{{ type | capitalise }}</div>
              <img class="sprite" v-bind:src="pokemon.image">
              <p>{{ pokemon.description }}</p>
            </div>
          </b-col>
      </b-row>
    </div>
  </b-container>
</template>

// JavaScript
// ============================================================================
<script>
import json from '../json/data.json';

export default {
  name: 'Pokedex',
  data () {
    return {
      title: 'Pokédex',
      json: json,
      selected: null,
      list: [],
      pokemon: {
        id: '',
        name: '',
        description: '',
        image: '',
        types: [],
        abilities: [],
        weight: 0,
        height: 0
      }
    }
  },
  mounted: function() {
    for (let i in json) {
      let object = {};
      object['id'] = json[i].id;
      object['name'] = json[i].name;
      this.list.push(object);
    }
  },
  watch: {
    selected: function() {
      for (var i in json) {
        if (json[i].name == this.selected) {
          this.pokemon.id = json[i].id;
          this.pokemon.name = json[i].name;
          this.pokemon.types = json[i].types;
          this.pokemon.description = json[i].about;
          this.pokemon.image = '../assets/sprites/1.png';
        }
      }
    }
  }
}
</script>

// CSS
// ============================================================================
<style scoped>

/* Global */
.col-centred {
  float: none;
  margin: 0 auto;
}

/* Pokemon */
.sprite {
  display: block;
  padding: 40px;
  border-radius: 0.25rem;
}

.type-box {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.175rem 0.75rem;
  margin: auto 7.5px 10px 0;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

/* Types */
.bug {
  background-color: #ABB642;
}

.dark {
  background-color: #6C584A;
}

.electric {
  background-color: #F2D054;
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

.grass {
  background-color: #8BC560;
}

.ground {
  background-color: #DBC074;
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

.steel {
  background-color: #B8B8CE;
}

.water {
  background-color: #6F91E9;
}

</style>
