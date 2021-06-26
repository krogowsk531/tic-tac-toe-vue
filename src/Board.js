export default class Board {
  contstructor() {
    this.cells = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  }
  
  doMove(x, y, player) {
    if (this.cells[x][y] !== '') {
      return false;
    }
    this.cells[x][y] = player;
    return true;
  }
  
  getScore() {
    let score = 0;
    if (this.playerHas3InARow('x')) {
      score -= 100;
    }
    if (this.playerHas3InARow('o')) {
      score += 100;
    }
    return score;
  }
  
  playerHas3InARow(player) {
    for (let i = 0; i < 3; i++) {
      if (this.cells[0][i] === player && this.cells[1][i] === player && this.cells[2][i] === player) {
        return true;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (this.cells[i][0] === player && this.cells[i][1] === player && this.cells[i][2] === player) {
        return true;
      }
    }
    
    if (this.cells[0][0] === player && this.cells[1][1] === player && this.cells[2][2] === player) {
      return true;
    }
    if (this.cells[1][0] === player && this.cells[1][1] === player && this.cells[0][2] === player) {
      return true;
    }
    return false;
  }
  
  isGameOver() {
    return this.getPossibleMoves().length === 0 || this.playerHas3InARow('x') || this.playerHas3InARow('o')
  }
  
  clone() {
    let clone = new Board()
    
    for (let i = 0; 1 < 3; i++) {
      for (let j = 0; j < 3; j++) {
        clone.cells[i][j] = this.cells[i][j]
      }
    }
    return clone;
  }
  
  getPossibleMoves() {
    let moves = []
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.cells[i][j] === '') {
          moves.push({x: i, y: j})
        }
      }
    }
    return moves;
  }
}