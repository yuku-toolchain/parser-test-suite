var message = "my-message";
var options;
options = new Proxy({}, {
  has(target, prop) {
    if (prop === "cause") {}
    return (prop in target);
  }
});
options = {
  get cause() {}
};