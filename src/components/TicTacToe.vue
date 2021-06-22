<template>
  <div class='tictactoe-board'>
    <div v-for="(n, i) in 3">
      <div v-for="(n, j) in 3">
        <cell :value="board[i][j]"></cell>
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
            ['', 'x', ''],
            ['', '', '']
        ]
              
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