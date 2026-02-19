var newObj = Object.create({}, {
  prop: {
    get: function () {
      return "verifyCreate";
    },
    enumerable: true,
    configurable: true
  }
});
var desc = Object.getOwnPropertyDescriptor(newObj, "prop");
var verifySet = desc.hasOwnProperty("set") && typeof desc.set === "undefined";
var verifyGet = false;
if (newObj.prop === "verifyCreate") {
  verifyGet = true;
}