<template>
  <div>
    <span id="pokemon-id">#{{ pokemon.id }}</span><br />
    <h3>{{ pokemon.name }}</h3>
    <div
      class="type-box"
      v-for="type in pokemon.types"
      :key="type"
      v-bind:class="type.toLowerCase()"
    >
      {{ type }}
    </div>
    <VueAudio
      class="pokemon-cry"
      v-if="pokemon.id"
      :file="getAudio(pokemon.id)"
    ></VueAudio>
    <br />
    <div id="description-container">
      <img
        id="pokemon-sprite"
        v-if="pokemon.id"
        :src="getSprite(pokemon.id)"
      />
      <p>{{ pokemon.description }}</p>
    </div>
  </div>
</template>

<script>
import VueAudio from "vue-audio";

export default {
  name: "HeaderInformation",
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
      require("../../assets/sprites/" + String(id).padStart(3, "0") + ".png"),
    /**
     * Retrieve a Pokemon audio file.
     * @param {String} id - The ID of the Pokemon.
     */
    getAudio: id => require("../../assets/audio/" + id + ".mp3")
  },
  components: {
    VueAudio
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/colours";

#pokemon-id {
  font-size: 16px;
  color: $lightgrey;
}

#pokemon-sprite {
  margin: 0 auto;
  display: block;
  padding: 5px;
}

.pokemon-cry {
  display: inline-block;
}
</style>
