class Prom1 extends Promise {
  constructor() {}
}
class Prom2 extends Promise {
  constructor(exec) {
    super(exec);
  }
}
new Prom2(function () {});