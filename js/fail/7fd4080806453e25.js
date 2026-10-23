var evalStr =
'
'if ( NaN === null ) {\n'+
'  throw new Test262Error("#1: NaN === null");\n'+
'}\n'+
'
'if ( Infinity === null ) {\n'+
'  throw new Test262Error("#2: Infinity === null");\n'+
'}\n'+
'
'if ( undefined === null ) {\n'+
'  throw new Test262Error("#3: undefined === null");\n'+
'}\n'+
';\n';
eval(evalStr);