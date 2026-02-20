var __str = 'She sells seashells by the seashore.';
var __re = /sh/;
if (__str.replace(__re, "$&" + 'sch') !== 'She sells seashschells by the seashore.') {}