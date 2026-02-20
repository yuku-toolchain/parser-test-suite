var toJSON = Date.prototype.toJSON;
var getAbrupt = {
  get valueOf() {}
};
var callAbrupt = {
  toString: function () {}
};
var notCoercible = Object.create(null);