var object = {
  undefined: true
};
if (object.undefined !== true) {}
var object = {
  undefined: true
};
if (object["undefined"] !== true) {}
var object = {
  "true": true
};
if (object["true"] !== true) {}
var object = {
  "null": true
};
if (object["null"] !== true) {}