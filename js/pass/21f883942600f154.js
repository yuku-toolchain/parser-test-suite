var descriptor = Object.getOwnPropertyDescriptor(Map.prototype, 'size');
var map = new Map();
descriptor.get.call(map);