var count = 0;
class A {
  constructor() {
    count++;
  }
}
class B extends A {
  constructor() {
    super();
    this.af = _ => super();
  }
}
var b = new B();