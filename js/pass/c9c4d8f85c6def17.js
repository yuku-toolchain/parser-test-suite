var toJSON = Date.prototype.toJSON;
this.toISOString = function () {
  return 'global';
};
Number.prototype.toISOString = function () {
  return 'str';
};
Symbol.prototype.toISOString = function () {
  return 10;
};