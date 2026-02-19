const a = {
  b: 22
};
function fn() {
  return this?.a;
}
const arr = [{
  a: 33
}];
const obj = {
  a: {
    b: 44
  }
};
function f2() {
  return {
    a: 33
  };
}
function f3() {}
class A {
  a() {}
  undf() {
    return super.a?.c;
  }
}
class B extends A {
  dot() {
    return super.a?.name;
  }
  expr() {
    return super['a']?.name;
  }
  undf2() {
    return super.b?.c;
  }
}
const subcls = new B();
class C {
  constructor() {}
}
new C();
class D {
  constructor(val) {
    this.a = val;
  }
}