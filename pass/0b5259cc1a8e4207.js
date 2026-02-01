var arr = [];
function get_func() {
  return 10;
}
Object.defineProperty(arr, "0", {
  get: get_func
});
Object.defineProperties(arr, {
  "0": {
    get: get_func
  }
});