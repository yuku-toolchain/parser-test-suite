var __evaluated, __in__do__before__break, __in__do__after__break;
__evaluated = eval("while(1) {__in__do__before__break=1; break; __in__do__after__break=2;}");
if (__in__do__before__break !== 1) {}
if (typeof __in__do__after__break !== "undefined") {}
if (__evaluated !== 1) {}