class Prom extends Promise {}
var calledExecutor = false;
var executorArguments;
var prom1 = new Prom(function () {
  calledExecutor = true;
  executorArguments = arguments;
});