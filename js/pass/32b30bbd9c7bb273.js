try {
  (0, eval)("var shouldNotBeDefined1; function NaN() {} var shouldNotBeDefined2;");
} catch (e) {}