var str = 'ABC AAA ABC AAA';
var result;
result = str.replaceAll('ABC', '$1');
result = str.replaceAll('ABC', '$2');
result = str.replaceAll('ABC', '$3');
result = str.replaceAll('ABC', '$4');
result = str.replaceAll('ABC', '$5');
result = str.replaceAll('ABC', '$6');
result = str.replaceAll('ABC', '$7');
result = str.replaceAll('ABC', '$8');
result = str.replaceAll('ABC', '$9');
var customRE = /./g;
Object.defineProperty(customRE, Symbol.replace, {
  value: undefined
});
result = ('--- /./g --- /a/g --- /./g ---').replaceAll(customRE, 'a($1$1)');