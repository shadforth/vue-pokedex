// HTML
// ============================================================================
<template>
  <div id="pokemon-info-panel">
    <img src="../assets/images/poke-ball.png" style="float:right;">
    <div v-show="Object.keys(pokemon.weight).length > 0">

      <!-- Pokemon header information -->
      <span id="pokemon-id">#{{ pokemon.id }}</span><br>
      <h3>{{ pokemon.name }}</h3>
      <div class="type-box" v-for="type in pokemon.types" :key="type" v-bind:class="type.toLowerCase()">{{ type }}</div>
      <vue-audio class="pokemon-cry" v-if="pokemon.id" :file="getAudio(pokemon.id)"></vue-audio><br>
      <div id="description-container">
        <img id="pokemon-sprite" v-if="pokemon.id" :src="getSprite(pokemon.id)" />
        <p>{{ pokemon.description }}</p>
      </div>

      <!-- Base statistics -->
      <div id="base-stats-container">
        <table class="table responsive">
          <tr>
            <td><strong>Height</strong><br>{{ pokemon.height.maximum }}</td>
            <td><strong>Weight</strong><br>{{ pokemon.weight.maximum }}</td>
            <td><strong>Type</strong><br><span v-if="pokemon.types">{{ (pokemon.types).join("/") }}</span></td>
            <td><strong>Generation</strong><br><span v-if="pokemon.generation">{{ pokemon.generation.split(" ")[1] }}</span></td>
          </tr>
          <tr>
            <td><strong>Max HP</strong><br>{{ pokemon.max_hp }}</td>
            <td><strong>Max CP</strong><br>{{ pokemon.max_cp }}</td>
            <td><strong>Attack</strong><br>{{ pokemon.base_attack }}</td>
            <td><strong>Defense</strong><br>{{ pokemon.base_defense }}</td>
          </tr>
        </table>
      </div>

      <!-- Special attacks -->
      <div id="spec-attack-container">
        <h4 id="spec-attack-title">Special attacks</h4>
        <table class="table responsive">
          <tr v-for="attack in pokemon.special_attacks" :key="attack.name">
            <td>{{ attack.name }}</td>
            <td>{{ attack.damage }} damage</td>
            <td></td>
            <td></td>
            <td>
              <div class="type-box type-box-sml" v-bind:class="attack.type.toLowerCase()">
                {{ attack.type }}
              </div>
            </td>
          </tr>
        </table>
      </div>

      <!-- Weaknesses -->
      <div id="weaknesses">
        <h4 id="weaknesses-title">Weaknesses</h4>
        <table class="table responsive">
          <tr>
            <td>
              <div class="type-box" v-for="weakness in pokemon.weaknesses" :key="weakness" v-bind:class="weakness.toLowerCase()">{{ weakness }}</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- Evolutionary forms -->
      <div id="evol-container" v-if="pokemon.previous_evolution || pokemon.next_evolution">
        <h4 id="evol-title">Evolutions</h4>
        <table class="table responsive">
          <tr>
            <td>
                <div id="previous-evolution" class="pokemon-evol-sprite-container" v-for="evolution in pokemon.previous_evolution" :key="evolution.id" v-on:click="getPokemon(evolution)">
                  <img class="pokemon-evol-sprite" :src="getSprite(evolution.id)">
                  <p>{{ evolution.name }}</p>
                </div>
                <div id="next-evolution" class="pokemon-evol-sprite-container" v-for="evolution in pokemon.next_evolution" :key="evolution.id" v-on:click="getPokemon(evolution)">
                  <img class="pokemon-evol-sprite" :src="getSprite(evolution.id)">
                  <p>{{ evolution.name }}</p>
                </div>
            </td>
          </tr>
        </table>
      </div>

    </div>
  </div>
</template>

// JavaScript
// ============================================================================
<script>
import json from '../json/data.json';
import VueAudio from 'vue-audio';
import EventBus from '../event-bus';

export default {
  name: 'InformationPanel',
  data () {
    return {
      title: 'Information Panel',
      json: json,
      pokemon: {
        id: '',
        weight: {},
        height: {},
        fast_attacks: {},
        special_attacks: {}
      }
    }
  },
  components: {
    'vue-audio': VueAudio
  },
  methods: {
    getSprite: function(id) {
      return require('../assets/sprites/' + String(id).padStart(3, '0') + '.png');
    },
    getAudio: function(id) {
      return require('../assets/audio/' + id + '.mp3');
    },
    getPokemon: function(data) {
      if (data != null) {
        let pokeid = data.id;
        if (pokeid.length != 3) {
          pokeid = String(pokeid).padStart(3, '0');
        }
        this.pokemon = json[Number.parseInt(pokeid) - 1];
      }
    }
  },
  created() {
    EventBus.$on('getPokemon', data => this.pokemon = data);
  }
}
</script>

// CSS
// ============================================================================
<style lang="scss" scoped>
@import '../assets/css/colours';

/* Pokemon */
#pokemon-info-panel {
  height: 100vh;
  width: 100%;
  margin: 0 0 5px 0;
  border-right: 1px solid #EEE;
  padding: 50px;
  background-color: $white;
}

#pokemon-info-panel h3 {
  margin: -5px 0 0 -2px;
  font-size: 36px;
}

#pokemon-info-panel h4 {
  font-size: 1.2rem;
  font-weight: bold;
}

#pokemon-id {
  font-size: 16px;
  color: $lightgrey;
}

#pokemon-sprite {
  margin: 0 auto;
  display: block;
  padding: 5px;
}

.pokemon-evol-sprite-container {
  float: left;
  display: block;
  margin: 10px 0;
  padding: 0 20px 0 0;
  text-align: center;
  cursor: pointer;
}

.pokemon-evol-sprite-container p {
  text-align: center;
  margin-bottom: 5px;
  color: $grey;
}

.pokemon-evol-sprite-container:hover p {
  color: lighten($grey, 20%);
}


#spec-attack-container,
#evol-container {
  margin: 15px 0;
}

/* Responsive */
@media only screen 
  and (max-width: 1024px) {
    #description-container {
      padding: 5px 0 10px 0;
      margin: 5px 0;
    }
    #pokemon-sprite {
      display: block;
      float: left;
      padding: 5px;
    }
}

/* Pokemon types */
.type-box {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.175rem 0.5rem 0.160rem 0.5rem;
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
.pokemon-cry {
  display: inline-block;
}
</style>