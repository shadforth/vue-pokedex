// HTML
// ============================================================================
<template>
  <b-container fluid>
    <div class="col-md-10 col-centred">
      <h1>{{ title }}</h1>
      <b-row>
        <b-col>
          <!-- Table -->
          <b-table hover outlined small
                  :fields="fields"
                  :items="list"
                  class="pokedex-table"
                  v-on:row-clicked="catchPokemon"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc">
            <template slot="pokeball">
              <img src="../assets/images/poke-ball.png">
            </template>
          </b-table>
        </b-col>
        <!-- Information -->
        <b-col>
          <div v-show="Object.keys(pokemon.weight).length > 0">
            <h3><img src="../assets/images/poke-ball.png"> #{{ pokemon.id }} {{ pokemon.name }}</h3>
            <div class="type-box" v-for="type in pokemon.types" :key="type" v-bind:class="type">{{ type | capitalise }}</div>
            <img class="sprite" v-if="pokemon.id" :src="sprite" />
            <p>{{ pokemon.weight.maximum }} {{ pokemon.height.maximum }} </p>
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
      fields: [
        { key: 'pokeball', sortable: false },
        { key: 'id',       sortable: true  },
        { key: 'name',     sortable: true  }
      ],
      sortBy: 'id',
      sortDesc: false,
      list: [],
      pokemon: {
        weight: {},
        height: {}
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
  computed: {
    sprite: function() {
      return require('../assets/sprites/' + this.pokemon.id + '.png');
    }
  },
  methods: {
    catchPokemon: function(data) {
      if (data != null) {
        this.pokemon = json[Number.parseInt(data.id) - 1];
        console.log(this.pokemon);
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

/* Table */
.pokedex-table {
  border: 1px solid white;
  cursor: pointer;
}

.table > tbody > tr:first-child > td {
    border: none;
}

/* Pokemon */
.sprite {
  display: block;
  padding: 40px;
  background-color: #FFF;
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

</style>
