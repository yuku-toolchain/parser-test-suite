var __map = {
  shape: "cube",
  5: "five",
  "6": "six"
};
if (__map.shape !== "cube") {}
if (__map["shape"] !== "cube") {}
if (__map["5"] !== "five") {}
if (__map[5] !== "five") {}
if (__map["6"] !== "six") {}
if (__map[6] !== "six") {}