var props = new RegExp();
props.prop = {
  value: 12,
  enumerable: true
};
var newObj = Object.create({}, props);