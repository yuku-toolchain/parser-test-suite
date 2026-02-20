var o = {
  a: 0,
  b: 1
};
var cthulhu = {
  get x() {
    delete o.a;
    o.b = 42;
    o.c = "ni";
  }
};
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({
      ...cthulhu,
      ...o
    });
  }
}
new Test262ChildClass();