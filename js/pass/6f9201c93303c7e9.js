let x = "h";
let f = Object.getOwnPropertyDescriptor((class {
  set f(a) {}
}).prototype, "f").set;
let g = Object.getOwnPropertyDescriptor((class {
  set ["g"](a) {}
}).prototype, "g").set;
let h = Object.getOwnPropertyDescriptor((class {
  set [x](a) {}
}).prototype, "h").set;
assertToStringOrNativeFunction(f, "set  f  (  a  )  {  }");
assertToStringOrNativeFunction(g, "set  [  \"g\"  ]  (  a  )  {  }");
assertToStringOrNativeFunction(h, "set  [  x  ]  (  a  )  {  }");