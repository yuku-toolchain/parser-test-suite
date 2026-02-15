var MyFunct = function () {};
var __my__funct = new MyFunct();
if (!(__my__funct instanceof MyFunct)) {}
if (__my__funct instanceof Function) {}
if (!(__my__funct instanceof Object)) {}
try {
  __my__funct instanceof __my__funct;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}