var uriReserved = [";", "/", "?", ":", "@", "&", "=", "+", "$", ","];
for (var indexC = 0; indexC < uriReserved.length; indexC++) {
  var str = uriReserved[indexC];
  if (encodeURI(str) !== str) {}
}