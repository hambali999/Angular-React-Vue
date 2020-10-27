<template>
  <div
    class="symbol-text"
    :class="{
      'player-1': piece.owner === 1,
      'player-2': piece.owner === 2,
      active: piece.cellActive
    }"
    @click="$emit('cell-clicked', { row, col, piece })"
  >
    {{ piece.symbol }}
  </div>
</template>

<script>
export default {
  props: {
    piece: Object,
    row: Number,
    col: Number
  },
  setup() {
    return {};
  }
};
</script>

<style>
.symbol-text {
  font-weight: bold;
}
.player-1 {
  color: red;
}
.player-2 {
  color: black;
}
.active {
  background-color: lightskyblue !important;
  outline: 1px solid black;
  outline-offset: -1px;
}
</style>
