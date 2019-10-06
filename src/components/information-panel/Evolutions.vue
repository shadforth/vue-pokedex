<template>
  <div id="evol-container" v-if="pokemon.previous_evolution || pokemon.next_evolution">
    <h4 id="evol-title">Evolutions</h4>
    <table class="table responsive">
      <tr>
        <td>
          <div
            id="previous-evolution"
            class="pokemon-evol-sprite-container"
            v-for="evolution in pokemon.previous_evolution"
            :key="evolution.id"
          >
            <img class="pokemon-evol-sprite" :src="getSprite(evolution.id)" />
            <p>{{ evolution.name }}</p>
          </div>
          <div
            id="next-evolution"
            class="pokemon-evol-sprite-container"
            v-for="evolution in pokemon.next_evolution"
            :key="evolution.id"
          >
            <img class="pokemon-evol-sprite" :src="getSprite(evolution.id)" />
            <p>{{ evolution.name }}</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import json from "../../json/data.json";

export default {
  name: "Evolutions",
  props: {
    pokemon: {
      type: Object
    }
  },
  methods: {
    /**
     * Retrieve a Pokemon sprite.
     * @param {String} id - The ID of the Pokemon.
     */
    getSprite: id =>
      require("../../assets/sprites/" + String(id).padStart(3, "0") + ".png")
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/colours";

#evol-container {
  margin: 15px 0;
}

.pokemon-evol-sprite-container {
  float: left;
  display: block;
  margin: 10px 0;
  padding: 0 20px 0 0;
  text-align: center;

  p {
    text-align: center;
    margin-bottom: 5px;
    color: $grey;
  }
}
</style>
