let x = "h";
class F {
  static f() {}
}
class G {
  static ["g"]() {}
}
class H {
  static [x]() {}
}
let f = F.f;
let g = G.g;
let h = H.h;
assertToStringOrNativeFunction(f, "f  (  )  {  }");
assertToStringOrNativeFunction(g, "[  \"g\"  ]  (  )  {  }");
assertToStringOrNativeFunction(h, "[  x  ]  (  )  {  }");