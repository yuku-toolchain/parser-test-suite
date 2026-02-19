var root = {};
var intermediary = new Proxy(Object.create(root), {});
var leaf = Object.create(intermediary);
root.__proto__ = leaf;