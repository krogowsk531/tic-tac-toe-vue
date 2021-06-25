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
}