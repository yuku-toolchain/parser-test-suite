var m = Symbol('method');
var method = ({
  *[m]() {}
})[m];