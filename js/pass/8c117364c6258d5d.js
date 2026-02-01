var __str = "aaaaaaaaaa,aaaaaaaaaaaaaaa";
var __pattern = /^(a+)\1*,\1+$/;
var __repl = "$1";
if (__str.replace(__pattern, __repl) !== 'aaaaa') {}