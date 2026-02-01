let f = ({
  f() {}
}).f;
assertToStringOrNativeFunction(f, "f  (  )  {  }");