var evalStr =
'
'for (var x in this) {\n'+
'  if ( x === \'Math\' ) {\n'+
'    throw new Test262Error("#1: \'Math\' have attribute DontEnum");\n'+
'  }\n'+
'}\n';
eval(evalStr);