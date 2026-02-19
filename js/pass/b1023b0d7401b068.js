var __executed = (/LS/i).exec({
  toString: function () {
    return false;
  }
});
var __expected = ["ls"];
__expected.index = 2;
__expected.input = "false";
for (var index = 0; index < __expected.length; index++) {}