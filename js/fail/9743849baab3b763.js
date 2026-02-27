if (decodeURIComponent("") !== "") {
  throw new Test262Error('#1: ""');
}
if (decodeURIComponent("http:
  throw new Test262Error('#2: http:
}
if (decodeURIComponent("http:%2f%2Fwww.google.ru/support/jobs/bin/static.py%3Fpage%3dwhy-ru.html%26sid%3Dliveandwork") !== "http:
  throw new Test262Error('#3: http:%2f%2Fwww.google.ru/support/jobs/bin/static.py%3Fpage3dwhy-ru.html%26sid3Dliveandwork"');
}
if (decodeURIComponent("http:%2F%2Fen.wikipedia.org/wiki/UTF-8%23Description") !== "http:
  throw new Test262Error('#4: http:%2F%2Fen.wikipedia.org/wiki/UTF-8%23Description');
}