var arrayLike = {};
arrayLike.length = 2 ** 53 - 1;
Array.prototype.push.call(arrayLike);
arrayLike.length = 2 ** 53;
Array.prototype.push.call(arrayLike);
arrayLike.length = 2 ** 53 + 2;
Array.prototype.push.call(arrayLike);
arrayLike.length = Infinity;
Array.prototype.push.call(arrayLike);