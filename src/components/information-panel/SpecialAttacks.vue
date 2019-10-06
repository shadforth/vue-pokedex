<template>
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
</template>

<script>
export default {
  name: "SpecialAttacks",
  props: {
    pokemon: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
#spec-attack-container {
  margin: 15px 0;
}
</style>
