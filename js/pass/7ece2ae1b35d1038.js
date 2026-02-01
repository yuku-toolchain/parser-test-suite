var object = {
  0: 1,
  "1": "x",
  o: {}
};
if (object[0] !== 1) {}
if (object["1"] !== "x") {}
if (typeof object.o !== "object") {}