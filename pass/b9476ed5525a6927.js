var subject = /abc/gim;
var pattern = /def/;
var result;
subject.lastIndex = 23;
pattern.lastIndex = 45;
result = subject.compile(pattern);