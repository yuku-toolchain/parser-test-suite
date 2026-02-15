try {
  eval("var shouldNotBeDefined; function NaN(){}");
} catch (e) {}