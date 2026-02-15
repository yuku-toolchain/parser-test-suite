var __str = 'She sells seashells by the seashore.';
var __re = /sh/;
if (__str.replace(__re, "$`" + 'sch') !== 'She sells seaShe sells seaschells by the seashore.') {}