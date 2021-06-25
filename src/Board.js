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
}