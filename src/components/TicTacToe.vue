<template>
  <div class='tictactoe-board'>
    <div v-for="(n, i) in 3">
      <div v-for="(n, j) in 3">
        <cell @click='performMove(i, j)' :value="board[i][j]"></cell>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  
    data() {
      return {
        board: [
            ['', '', ''], 
            ['', '', ''],
            ['', '', '']
        ]        
      }
    }, 
    
    methods: {
      performMove(x, y) {
      if (this.board[x][y] !== '') {
        return;
      }
      
      this.board[x][y] = 'x';
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