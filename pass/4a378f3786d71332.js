var arrayLike = {
  "9007199254740989": "9007199254740989",
  "9007199254740991": "9007199254740991",
  length: 2 ** 53 - 2
};
Array.prototype.push.call(arrayLike, "new-value");