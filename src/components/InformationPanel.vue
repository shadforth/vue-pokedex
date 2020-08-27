<template>
  <div id="pokemon-info-panel">
    <img
      src="../assets/images/poke-ball.png"
      class="pokemon-info-panel-pokeball"
    />
    <div v-show="Object.keys(pokemon.weight).length > 0">
      <HeaderInformation :pokemon="pokemon" />
      <BaseStatistics :pokemon="pokemon" />
      <SpecialAttacks :pokemon="pokemon" />
      <Weaknesses :pokemon="pokemon" />
      <Evolutions :pokemon="pokemon" />
    </div>
  </div>
</template>

<script>
import BaseStatistics from "./BaseStatistics.vue";
import Evolutions from "./Evolutions.vue";
import HeaderInformation from "./HeaderInformation.vue";
import SpecialAttacks from "./SpecialAttacks.vue";
import Weaknesses from "./Weaknesses.vue";

import EventBus from "../event-bus";
import json from "../json/data.json";

export default {
  name: "InformationPanel",
  data() {
    return {
      title: "Information Panel",
      json: json,
      pokemon: {
        id: "",
        weight: {},
        height: {},
        fast_attacks: {},
        special_attacks: {},
      },
      props: {
        pokemon: this.pokemon,
      },
    };
  },
  components: {
    BaseStatistics,
    Evolutions,
    HeaderInformation,
    SpecialAttacks,
    Weaknesses,
  },
  methods: {
    /**
     * Retrieve the Pokemon JSON object from data.json.
     */
    getPokemon: function(data) {
      if (data != null) {
        let pokeid = data.id;
        if (pokeid.length != 3) {
          pokeid = String(pokeid).padStart(3, "0");
        }
        this.pokemon = json[Number.parseInt(pokeid) - 1];
      }
    },
  },
  created() {
    EventBus.$on("getPokemon", data => (this.pokemon = data));
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/colours";
@import "../shared/spacing";

#pokemon-info-panel {
  height: 100vh;
  width: 100%;
  margin-bottom: $sm;
  border-right: $xxs solid $extralightgrey;
  padding: $xxl;
  background-color: $white;

  h3 {
    margin-top: -$sm;
    margin-left: -$sm;
    font-size: 36px;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .pokemon-info-panel-pokeball {
    float: right;
  }
}

@media only screen and (max-width: 1024px) {
  #description-container {
    padding-top: $sm;
    padding-bottom: $md;
    margin: $sm 0;
  }

  #pokemon-sprite {
    display: block;
    float: left;
    padding: $sm;
  }
}
</style>
