var callCount = 0;
var C = class {
  #method([[x, y, z] = [4, 5, 6]] = [[7, 8, 9]]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method();