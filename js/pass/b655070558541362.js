var arrayLike = {};
arrayLike.length = 2 ** 53 - 1;
Array.prototype.unshift.call(arrayLike);
arrayLike.length = 2 ** 53;
Array.prototype.unshift.call(arrayLike);
arrayLike.length = 2 ** 53 + 2;
Array.prototype.unshift.call(arrayLike);
arrayLike.length = Infinity;
Array.prototype.unshift.call(arrayLike);