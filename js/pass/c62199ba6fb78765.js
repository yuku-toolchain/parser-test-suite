function f(a = 0, {b = 0}) {}
assertToStringOrNativeFunction(f, "function  f  (  a  =  0  ,  {  b  =  0  }  )  {  }");