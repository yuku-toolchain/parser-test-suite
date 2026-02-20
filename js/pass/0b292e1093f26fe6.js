var source = new ArrayBuffer(4);
var sourceArray = new Uint8Array(source);
sourceArray[0] = 1;
sourceArray[1] = 2;
sourceArray[2] = 3;
sourceArray[3] = 4;
var dest = source.transferToFixedLength(0);