// HTML
// ============================================================================
<template>
  <b-container fluid>
    <div class="col-md-8">
      <b-row>
        <!-- Pokemon information -->
        <b-col>
          <div id="information-panel">
            <img src="../assets/images/poke-ball.png" style="float:right;">
            <div v-show="Object.keys(pokemon.weight).length > 0">
              <span class="pokemon-id">#{{ pokemon.id }}</span><br>
              <h3>{{ pokemon.name }}</h3>

              <!-- Type boxes and audio -->
              <div class="type-box" v-for="type in pokemon.types" :key="type" v-bind:class="type.toLowerCase()">{{ type }}</div>
              <vue-audio class="pokemon-cry" v-if="pokemon.id" :file="getAudio(pokemon.id)"></vue-audio>

              <img class="sprite" v-if="pokemon.id" :src="getSprite(pokemon.id)" />
              <p>{{ pokemon.description }}</p>
              <strong>Base statistics</strong><br>
              <table class="table">
                <tr>
                  <td><strong>Height</strong><br>{{ pokemon.height.maximum }}</td>
                  <td><strong>Weight</strong><br>{{ pokemon.weight.maximum }}</td>
                  <td><strong>Type</strong><br><span v-if="pokemon.types">{{ (pokemon.types).join("/") }}</span></td>
                </tr>
                <tr>
                  <td><strong>Max. HP</strong><br>{{ pokemon.max_hp }}</td>
                  <td><strong>Attack</strong><br>{{ pokemon.base_attack }}</td>
                  <td><strong>Defense</strong><br>{{ pokemon.base_defense }}</td>
                </tr>
              </table>
              <strong>Evolutions</strong><br>
              <table class="table">
                <tr>
                  <td>
                      <div class="evol-sprite-container" v-for="evolution in pokemon.previous_evolution" :key="evolution.id">
                        <img class="evol-sprite" :src="getSprite(evolution.id)">
                        <p>{{ evolution.name }}</p>
                      </div>
                      <div class="evol-sprite-container" v-for="evolution in pokemon.next_evolution" :key="evolution.id">
                        <img class="evol-sprite" :src="getSprite(evolution.id)">
                        <p>{{ evolution.name }}</p>
                      </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </b-col>
        <b-col>
        <!-- Pokedex table -->
        <div class="panel panel-default">
          <div id="table-overflow">
            <!-- Search bar -->
            <b-form-input id="search-bar" v-model="filter" placeholder="Type to search..." />
            <div id="table-container">
              <b-table hover
                      :fields="fields"
                      :items="list"
                      :filter="filter"
                      class="pokedex-table table-borderless"
                      v-on:row-clicked="getPokemon"
                      :sort-by.sync="sortBy"
                      :sort-desc.sync="sortDesc">
              </b-table>
            </div>
          </div>
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
import VueAudio from 'vue-audio';

export default {
  name: 'Pokedex',
  data () {
    return {
      title: 'Pokédex',
      json: json,
      list: [],
      pokemon: {
        weight: {},
        height: {},
        fast_attacks: {},
        special_attacks: {}
      },
      fields: [
        { key: 'id',       sortable: true  },
        { key: 'name',     sortable: true  }
      ],
      sortBy: 'id',
      sortDesc: false,
      filter: null,
    }
  },
  components: {
    'vue-audio': VueAudio
  },
  mounted: function() {
    for (let i in json) {
      let object = {};
      object.id = json[i].id;
      object.name = json[i].name;
      this.list.push(object);
    }
  },
  methods: {
    getPokemon: function(data) {
      if (data != null) {
        this.pokemon = json[Number.parseInt(data.id) - 1];
      }
    },
    getSprite: function(id) {
      return require('../assets/sprites/' + String(id).padStart(3, "0") + '.png');
    },
    getAudio: function(id) {
      return require('../assets/audio/' + id + '.mp3');
    }
  }
}
</script>

// CSS
// ============================================================================
<style scoped>

/* Global */
.col-centred {
  margin: 0 auto;
}

/* Table */
.table-borderless > tbody > tr > td,
.table-borderless > tbody > tr > th,
.table-borderless > tfoot > tr > td,
.table-borderless > tfoot > tr > th,
.table-borderless > thead > tr > td,
.table-borderless > thead > tr > th {
    border: none;
}

#table-overflow {
  overflow: hidden;
}

#table-container {
  height: 630px;
  border: 2px solid #D93E39;
  border-top: none;
  border-radius: 0.35rem;
  overflow: auto;
  background: #FFF;
}

#table-container::-webkit-scrollbar {
  display: none;
}

.pokedex-table {
  padding: 20px;
  background: #FFF;
  cursor: pointer;
}

.table > tbody > tr:first-child > td {
    border: none;
}

/* Pokemon */
#information-panel {
  width: 500px;
  min-height: 675px;
  border-radius: 0.25rem;
  padding: 20px;
  background-color: #FFFFFF;
}

#information-panel h3 {
  margin-bottom: 5px;
}

.pokemon-id {
  color: #AAAAAA;
}

.sprite {
  margin: 0 auto;
  display: block;
  padding: 5px;
}

.evol-sprite-container {
  float: left;
  display: block;
  margin: 5px;
  border-radius: 0.25rem;
  padding: 5px 10px;
  background-color: #EEEEEE;
  text-align: center;
}

.evol-sprite-container p {
  text-align: center;
  margin-bottom: 5px;
  color: #888;
}

/* Pokemon cry */
.pokemon-cry {
  display: inline-block;
}

/* Search bar */
#search-bar {
  margin: -2px 0 10px 0;
  border: 2px solid #D93E39;
}

</style>
