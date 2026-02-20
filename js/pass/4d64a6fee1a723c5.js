class A {}
class B extends A {}
class C extends B {
  m() {}
}
assertToStringOrNativeFunction(A, "class  A  {  }");
assertToStringOrNativeFunction(B, "class  B  extends  A  {  }");
assertToStringOrNativeFunction(C, "class  C  extends  B  {  m  (  )  {  }  }");