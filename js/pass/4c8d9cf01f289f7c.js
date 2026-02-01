var called = false;
var p = new Proxy(Promise.resolve(), {});
var oldThen = Promise.prototype.then;
Promise.prototype.then = () => {
  called = true;
};
Promise.prototype.finally.call(p);
Promise.prototype.then = oldThen;