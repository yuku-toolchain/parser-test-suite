const re = /(?<a>a).|(?<x>x)/;
const result = re.exec("ab");
Array.prototype.groups = {
  a: "b",
  x: "y",
  z: "z"
};
Array.prototype.groups = undefined;