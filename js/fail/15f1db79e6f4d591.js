var evalStr =
'
'if ( eval === null ) {\n'+
'  throw new Test262Error("#4: eval === null");\n'+
'}\n'+
'
'if ( parseInt === null ) {\n'+
'  throw new Test262Error("#5: parseInt === null");\n'+
'}\n'+
'
'if ( parseFloat === null ) {\n'+
'  throw new Test262Error("#6: parseFloat === null");\n'+
'}\n'+
'
'if ( isNaN === null ) {\n'+
'  throw new Test262Error("#7: isNaN === null");\n'+
'}\n'+
'
'if ( isFinite === null ) {\n'+
'  throw new Test262Error("#8: isFinite === null");\n'+
'}\n'+
'
'if ( decodeURI === null ) {\n'+
'  throw new Test262Error("#9: decodeURI === null");\n'+
'}\n'+
'
'if ( decodeURIComponent === null ) {\n'+
'  throw new Test262Error("#10: decodeURIComponent === null");\n'+
'}\n'+
'
'if ( encodeURI === null ) {\n'+
'  throw new Test262Error("#11: encodeURI === null");\n'+
'}\n'+
'
'if ( encodeURIComponent === null ) {\n'+
'  throw new Test262Error("#12: encodeURIComponent === null");\n'+
'}\n'+
';\n';
eval(evalStr);