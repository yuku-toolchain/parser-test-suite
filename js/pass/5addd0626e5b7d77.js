var counter = 0;
var o = {
  [++counter]: ++counter,
  [++counter]: ++counter,
  [++counter]: ++counter
};
var keys = Object.getOwnPropertyNames(o);