var subject, result;
subject = /abc/ig;
result = subject.compile('def');
subject = /abc/gi;
result = subject.compile('def', undefined);