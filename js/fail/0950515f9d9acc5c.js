var evalStr =
'
'if ( Object === null ) {\n'+
'  throw new Test262Error("#13: Object === null");\n'+
'}\n'+
'
'if ( Function === null ) {\n'+
'  throw new Test262Error("#14: Function === null");\n'+
'}\n'+
'
'if ( String === null ) {\n'+
'  throw new Test262Error("#15: String === null");\n'+
'}\n'+
'
'if ( Number === null ) {\n'+
'  throw new Test262Error("#16: Function === null");\n'+
'}\n'+
'
'if ( Array === null ) {\n'+
'  throw new Test262Error("#17: Array === null");\n'+
'}\n'+
'
'if ( Boolean === null ) {\n'+
'  throw new Test262Error("#20: Boolean === null");\n'+
'}\n'+
'
'if ( Date === null ) {\n'+
'  throw new Test262Error("#18: Date === null");\n'+
'}\n'+
'
'if ( RegExp === null ) {\n'+
'  throw new Test262Error("#19: RegExp === null");\n'+
'}\n'+
'
'if ( Error === null ) {\n'+
'  throw new Test262Error("#20: Error === null");\n'+
'}\n'+
'
'if ( EvalError === null ) {\n'+
'  throw new Test262Error("#21: EvalError === null");\n'+
'}\n'+
'
'if ( RangeError === null ) {\n'+
'  throw new Test262Error("#22: RangeError === null");\n'+
'}\n'+
'
'if ( ReferenceError === null ) {\n'+
'  throw new Test262Error("#23: ReferenceError === null");\n'+
'}\n'+
'
'if ( SyntaxError === null ) {\n'+
'  throw new Test262Error("#24: SyntaxError === null");\n'+
'}\n'+
'
'if ( TypeError === null ) {\n'+
'  throw new Test262Error("#25: TypeError === null");\n'+
'}\n'+
'
'if ( URIError === null ) {\n'+
'  throw new Test262Error("#26: URIError === null");\n'+
'}\n'+
';\n';
eval(evalStr);