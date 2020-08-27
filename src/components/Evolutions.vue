<template>
  <div
    id="evol-container"
    v-if="pokemon.previous_evolution || pokemon.next_evolution"
  >
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
export default {
  name: "Evolutions",
  props: {
    pokemon: {
      type: Object,
    },
  },
  methods: {
    /**
     * Retrieve a Pokemon sprite.
     * @param {String} id - The ID of the Pokemon.
     */
    getSprite: id =>
      require("../assets/sprites/" + String(id).padStart(3, "0") + ".png"),
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/colours";
@import "../shared/spacing";

#evol-container {
  margin: $md 0;
}

.pokemon-evol-sprite-container {
  float: left;
  padding: 0 $lg;

  p {
    text-align: center;
  }
}
</style>
