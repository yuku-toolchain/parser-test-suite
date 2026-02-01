var nonGlobalRe = /./;
var globalRe = /./g;
var accessor = function () {};
Object.defineProperty(nonGlobalRe, 'unicode', {
  get: accessor
});
Object.defineProperty(globalRe, 'unicode', {
  get: accessor
});