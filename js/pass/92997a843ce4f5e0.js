var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
class GFn1 extends GeneratorFunction {
  constructor() {}
}
class GFn2 extends GeneratorFunction {
  constructor() {
    super();
  }
}
var fn = new GFn2();