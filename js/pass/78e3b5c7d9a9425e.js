let x = "h";
class F {
  static set f(a) {}
}
class G {
  static set ["g"](a) {}
}
class H {
  static set [x](a) {}
}
let f = Object.getOwnPropertyDescriptor(F, "f").set;
let g = Object.getOwnPropertyDescriptor(G, "g").set;
let h = Object.getOwnPropertyDescriptor(H, "h").set;
assertToStringOrNativeFunction(f, "set  f  (  a  )  {  }");
assertToStringOrNativeFunction(g, "set  [  \"g\"  ]  (  a  )  {  }");
assertToStringOrNativeFunction(h, "set  [  x  ]  (  a  )  {  }");