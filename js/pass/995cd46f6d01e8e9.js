var arrayLike = {};
arrayLike.length = 2 ** 53 - 1;
Array.prototype.splice.call(arrayLike);
arrayLike.length = 2 ** 53;
Array.prototype.splice.call(arrayLike);
arrayLike.length = 2 ** 53 + 2;
Array.prototype.splice.call(arrayLike);
arrayLike.length = Infinity;
Array.prototype.splice.call(arrayLike);