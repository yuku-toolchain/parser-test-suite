var constructCounts = {
  base: 0,
  subclass: 0,
  subclass2: 0
};
class Base {
  constructor() {
    constructCounts.base++;
  }
}
var b = new Base(1, 2);
class Subclass extends Base {
  constructor() {
    constructCounts.subclass++;
    super(1, 2);
  }
}
var s = new Subclass(3, 4);
class Subclass2 extends Base {
  constructor(x, y) {
    constructCounts.subclass2++;
    super(1, 2);
  }
}
var s2 = new Subclass2(3, 4);