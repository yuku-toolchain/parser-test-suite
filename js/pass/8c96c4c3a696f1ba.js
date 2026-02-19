let f = ({
  ["f"]() {}
}).f;
let g = ({
  [({
    a() {}
  }).a]() {}
})["a(){}"];
assertToStringOrNativeFunction(f, "[  \"f\"  ]  (  )  {  }");
assertToStringOrNativeFunction(g, "[ { a(){} }.a ](){ }");