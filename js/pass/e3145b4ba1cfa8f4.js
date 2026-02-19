let x = "h";
class F {
  f() {}
}
class G {
  ["g"]() {}
}
class H {
  [x]() {}
}
let f = F.prototype.f;
let g = G.prototype.g;
let h = H.prototype.h;
assertToStringOrNativeFunction(f, "f  (  )  {  }");
assertToStringOrNativeFunction(g, "[  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "[  x  ]  (  )  {  }");