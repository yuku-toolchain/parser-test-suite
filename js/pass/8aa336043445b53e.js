try {
  (0, eval)("function shouldNotBeDefined1() {} function NaN() {} function shouldNotBeDefined2() {}");
} catch (e) {}