let x = "h";
let f = Object.getOwnPropertyDescriptor({
  set f(a) {}
}, "f").set;
let g = Object.getOwnPropertyDescriptor({
  set ["g"](a) {}
}, "g").set;
let h = Object.getOwnPropertyDescriptor({
  set [x](a) {}
}, "h").set;
assertToStringOrNativeFunction(f, "set  f  (  a  )  {  }");
assertToStringOrNativeFunction(g, "set  [  \"g\"  ]  (  a  )  {  }");
assertToStringOrNativeFunction(h, "set  [  x  ]  (  a  )  {  }");