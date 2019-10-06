<template>
  <div id="weaknesses">
    <h4 id="weaknesses-title">Weaknesses</h4>
    <table class="table responsive">
      <tr>
        <td>
          <div
            class="type-box"
            v-for="weakness in pokemon.weaknesses"
            :key="weakness"
            v-bind:class="weakness.toLowerCase()"
          >
            {{ weakness }}
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Weaknesses",
  props: {
    pokemon: {
      type: Object
    }
  }
}
</script>
