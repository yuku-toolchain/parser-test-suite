let x = "h";
let f = Object.getOwnPropertyDescriptor(class {
  static set f(a) {}
}, "f").set;
let g = Object.getOwnPropertyDescriptor(class {
  static set ["g"](a) {}
}, "g").set;
let h = Object.getOwnPropertyDescriptor(class {
  static set [x](a) {}
}, "h").set;
assertToStringOrNativeFunction(f, "set  f  (  a  )  {  }");
assertToStringOrNativeFunction(g, "set  [  \"g\"  ]  (  a  )  {  }");
assertToStringOrNativeFunction(h, "set  [  x  ]  (  a  )  {  }");