if (decodeURI("") !== "") {
  throw new Test262Error('#1: ""');
}
if (decodeURI("http:%2f%2Funipro.ru") !== "http:%2f%2Funipro.ru") {
  throw new Test262Error('#2: http:%2f%2Funipro.ru');
}
if (decodeURI("http:
  throw new Test262Error('#3: http:
}
if (decodeURI("http:
  throw new Test262Error('%234: http:
}