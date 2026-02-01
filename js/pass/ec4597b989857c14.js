var unreachable = 0;
var reachable = 0;
class C extends null {
  constructor() {
    reachable += 1;
    super();
    unreachable += 1;
  }
}