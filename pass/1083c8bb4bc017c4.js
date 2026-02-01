var regObj = new RegExp();
regObj.value = "RegExpValue";
var newObj = Object.create({}, {
  prop: regObj
});