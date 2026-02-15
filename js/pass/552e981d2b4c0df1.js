var arr = [];
function get_fun() {
  return 36;
}
Object.defineProperty(arr, "1", {
  get: get_fun
});
try {
  Object.defineProperties(arr, {
    "1": {
      get: undefined
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}