var base = new Uint8Array([255, 255, 255, 255, 255, 255, 255]);
var subarray = base.subarray(2, 5);
var result = subarray.setFromHex('aabbcc');