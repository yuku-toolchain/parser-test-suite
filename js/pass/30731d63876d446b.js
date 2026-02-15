var __strOriginal = "hello";
var __openParen = '(';
var __closeParen = ')';
var __pattern = '';
var numParens = 200;
for (var i = 0; i < numParens; i++) __pattern += __openParen;
__pattern += __strOriginal;
for (i = 0; i < numParens; i++) __pattern += __closeParen;
var __re = new RegExp(__pattern);
var __executed = __re.exec(__strOriginal);
var __expected = [];
for (var i = 0; i <= numParens; i++) __expected.push(__strOriginal);
__expected.index = 0;
__expected.input = __strOriginal;
for (var index = 0; index < __expected.length; index++) {}