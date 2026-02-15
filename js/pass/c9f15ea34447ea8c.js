var number = 5;
var string = 'str';
var object = {};
function fn() {
  return 'result';
}
var calls;
calls = 0;
(function () {
  calls++;
})`NoSubstitutionTemplate`;
calls = 0;
(function (site, n, s, o, f, r) {
  calls++;
})`TemplateHead${number}TemplateSpans${string}${object}${fn}${fn()}`;