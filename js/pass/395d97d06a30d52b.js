const re = /./;
const result = re.exec("a");
Array.prototype.groups = {
  a: "b"
};
Array.prototype.groups = undefined;