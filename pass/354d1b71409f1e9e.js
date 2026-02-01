function fn() {
  this.args = arguments;
}
var result = Reflect.construct(fn, [42, 'Mike', 'Leo']);