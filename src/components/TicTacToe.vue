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
    }, 
    minimax(board, player, depth = 1) {
      if (board.isGameOver()) {
        return {
          score: board.getScore() + depth,
          move: null
        }
      }
      let bestScore = player === 'o' ? -10000 : 10000;
      let bestMove = null;
      
      let moves = board.getPossibleMoves();
      for (let i = 0; i < moves.length; i++) {
        let move = moves[i];
        let newBoard = board.clone();
        newBoard.doMove(move.x, move.y, player)
        
        const score = this.minimax(newBoard, player === 'x' ? 'o': 'x', depth + 1).score;
        
        if ((player === 'o' && score > bestScore) || (player === 'x' && score < bestScore)) {
          bestScore = score;
          bestMove = move;
        }
      }
      return {
        score: bestScore,
        move: bestMove,
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