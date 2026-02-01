var _map = {
  1: "one",
  two: 2
};
_map[1] = "uno";
if (_map[1] !== "uno") {}
_map["1"] = 1;
if (_map[1] !== 1) {}
_map["two"] = "two";
if (_map["two"] !== "two") {}
_map.two = "duo";
if (_map.two !== "duo") {}