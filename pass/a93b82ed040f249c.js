var f = new Function("arg1,arg2,arg3", null);
for (var key in f) {
  if (key == "length") {
    var lengthenumed = true;
  }
}