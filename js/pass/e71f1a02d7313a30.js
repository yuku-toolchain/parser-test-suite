function thrower() {}
var f = function ({x = thrower()} = {}) {};