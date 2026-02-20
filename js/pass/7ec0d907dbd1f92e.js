var arr = [];
function get_fun() {
  return 36;
}
Object.defineProperty(arr, "0", {
  get: undefined,
  configurable: true
});
Object.defineProperties(arr, {
  "0": {
    get: get_fun
  }
});