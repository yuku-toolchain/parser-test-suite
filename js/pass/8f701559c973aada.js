var obj = {
  "0": "a",
  "1": "b",
  "9007199254740990": "c",
  "9007199254740991": "d",
  "9007199254740992": "e"
};
obj.length = -0;
obj.length = -1;
obj.length = -0.1;
obj.length = -Infinity;
var fromIndex = 9007199254740990;
obj.length = 9007199254740991;
obj.length = 9007199254740991;
obj.length = 9007199254740992;
obj.length = 9007199254740993;
obj.length = Infinity;