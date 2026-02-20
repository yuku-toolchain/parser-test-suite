var __str = "\u0041A\u0042B\u0043C";
if (__str !== 'AABBCC') {}
var __str__ = "\u0041\u0042\u0043" + 'ABC';
if (__str__ !== 'ABCABC') {}
var str__ = "ABC" + '\u0041\u0042\u0043';
if (str__ !== "ABCABC") {}