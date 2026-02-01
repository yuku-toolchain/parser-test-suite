let x = "h";
class F {
  set f(a) {}
}
class G {
  set ["g"](a) {}
}
class H {
  set [x](a) {}
}
let f = Object.getOwnPropertyDescriptor(F.prototype, "f").set;
let g = Object.getOwnPropertyDescriptor(G.prototype, "g").set;
let h = Object.getOwnPropertyDescriptor(H.prototype, "h").set;
assertToStringOrNativeFunction(f, "set  f  (  a  )  {  }");
assertToStringOrNativeFunction(g, "set  [  \"g\"  ]  (  a  )  {  }");
assertToStringOrNativeFunction(h, "set  [  x  ]  (  a  )  {  }");