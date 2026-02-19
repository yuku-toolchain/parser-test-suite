try {
  eval("function shouldNotBeDefined(){} function NaN(){}");
} catch (e) {}