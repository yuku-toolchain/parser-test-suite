var obj = {
  test262id: 1
};
with (obj) {
  var test262id = delete obj.test262id;
}