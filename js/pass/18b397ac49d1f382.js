var f = Function("arg1,arg2,arg3", "arg5,arg4", null);
for (var key in f) {
  if (key == "length") {
    var lengthenumed = true;
  }
}