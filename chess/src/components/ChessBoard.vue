<template>
  <div class="board" v-if="gameState.piecesMap[0]">
    <template v-for="row in boardSize" :key="row">
      <Cell
        v-for="col in boardSize"
        :key="col"
        class="cell"
        :class="{ colored: isColored(row, col) }"
        :piece="gameState.piecesMap[row - 1][col - 1]"
        :row="row - 1"
        :col="col - 1"
        @cell-clicked="$emit('cell-clicked', $event)"
      ></Cell>
    </template>
  </div>
</template>

<script>
import Cell from "../components/ChessCell.vue";
export default {
  components: {
    Cell
  },
  props: {
    boardSize: Number,
    gameState: Object
  },
  setup() {
    function isColored(row, col) {
      const colIsOdd = col % 2;
      const rowIsOdd = row % 2;

      return rowIsOdd ? colIsOdd : !colIsOdd;
    }

    return {
      isColored
    };
  }
};
</script>

<style>
.cell {
  height: 100%;
  width: 100%;
}
.colored {
  background-color: lightgray;
}
.board {
  --board-size: 25px;
  display: grid;
  grid-template-columns: repeat(8, var(--board-size));
  grid-template-rows: repeat(8, var(--board-size));
  border: 2px solid black;
}
</style>
