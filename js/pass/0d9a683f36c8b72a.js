this.position = 0;
var seat = {};
seat['move'] = function () {
  position++;
};
seat.move();
if (position !== 1) {}
seat['move']();
if (position !== 2) {}