class M1 extends WeakMap {
  constructor() {}
}
class M2 extends WeakMap {
  constructor() {
    super();
  }
}
new M2();