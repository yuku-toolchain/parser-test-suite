var x = "outer";
function evalInComputedPropertyKey({[eval("var x = 'inner'")]: ignored}) {}
evalInComputedPropertyKey({});