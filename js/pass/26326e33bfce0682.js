var subject = /abc/gim;
var result;
subject.lastIndex = 23;
result = subject.compile(subject);