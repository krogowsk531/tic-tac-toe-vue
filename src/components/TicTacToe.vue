<template>
  <div class='tictactoe-board'>
    <div v-for="(n, i) in 3">
      <div v-for="(n, j) in 3">
        <cell @click='performMove(i, j)' :value="board.cells[i][j]"></cell>
      </div>
    </div>
  </div>
</template>
<script>
    import Board from './Board'
  export default {
  
    data() {
      return {
        board: new Board();
      }
    }, 
    
    methods: {
      performMove(x, y) {
      if (!this.board.doMove(x, y, 'x')) {
        return;
      }
      
      this.$forceUpdate();
      }
    }
  }
</script>
<style>
  .tictactoe-board {
    display: flex;
    flex-wrap: wrap;
    
    width: 204px;
    height: 204px;
  }
</style>