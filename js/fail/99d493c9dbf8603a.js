var evalStr =
'
'if ( Math === null ) {\n'+
'  throw new Test262Error("#27: Math === null");\n'+
'}\n'+
';\n';
eval(evalStr);