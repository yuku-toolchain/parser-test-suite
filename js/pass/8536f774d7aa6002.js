var __in__do__before__break, __in__do__after__break;
do {
  __in__do__before__break = "reached";
  break;
  __in__do__after__break = "where am i";
} while (2 === 1);
if (__in__do__before__break !== "reached") {}
if (typeof __in__do__after__break !== "undefined") {}