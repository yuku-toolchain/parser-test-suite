var obj = {
  "a": "a"
};
var result = Object.getOwnPropertyNames(obj);
var beforeOverride = result[0] === "a";
result[0] = "b";
var afterOverride = result[0] === "b";