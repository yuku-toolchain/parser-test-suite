var a = [];
var callCount = 0;
var cb = function () {
  callCount += 0;
};
a.constructor = null;
a = [];
a.constructor = 1;
a = [];
a.constructor = 'string';
a = [];
a.constructor = true;