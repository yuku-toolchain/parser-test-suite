class A extends B {
  constructor() {}
  m() {}
}
assertToStringOrNativeFunction(A, "class  A  extends  B  {  constructor  (  )  {  ;  }  m  (  )  {  }  }");
function B() {}