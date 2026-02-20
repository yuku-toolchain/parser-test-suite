function fn() {
  return {
    a: 33
  };
}
const obj = {
  fn() {
    return 44;
  }
};
class A {}
class B extends A {
  constructor() {}
}
new B();
function fn2() {
  return () => {
    return {
      a: 66
    };
  };
}
function fn3() {
  return () => {
    return null;
  };
}
function fn4() {
  return [{
    a: 77
  }];
}
function fn5() {
  return [];
}
function fn6() {
  return {
    a: {
      b: 88
    }
  };
}
function fn7() {
  return () => {};
}