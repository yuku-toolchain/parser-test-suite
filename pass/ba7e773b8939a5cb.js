var arrayLike = {
  "9007199254740988": "9007199254740988",
  "9007199254740989": "9007199254740989",
  "9007199254740990": "9007199254740990",
  "9007199254740991": "9007199254740991",
  length: 2 ** 53 + 2
};
var result = Array.prototype.slice.call(arrayLike, 9007199254740989);
var result = Array.prototype.slice.call(arrayLike, 9007199254740989, 9007199254740990);
var result = Array.prototype.slice.call(arrayLike, 9007199254740989, 9007199254740996);
var result = Array.prototype.slice.call(arrayLike, -2);
var result = Array.prototype.slice.call(arrayLike, -2, -1);