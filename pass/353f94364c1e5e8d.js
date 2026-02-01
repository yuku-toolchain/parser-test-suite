let o = {
  999999999999999999n: true
};
o = {
  1n() {
    return "bar";
  }
};
class C {
  1n() {
    return "baz";
  }
}
let c = new C();
let {1n: a} = {
  "1": "foo"
};