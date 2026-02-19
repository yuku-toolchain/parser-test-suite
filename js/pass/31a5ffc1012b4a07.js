function F() {
  this.af = _ => {
    return this;
  };
}
var usurper = {};
var f = new F();