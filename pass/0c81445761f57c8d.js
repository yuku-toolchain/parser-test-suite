class MyError extends Error {}
class MyEvalError extends EvalError {}
class MyRangeError extends RangeError {}
class MyReferenceError extends ReferenceError {}
class MySyntaxError extends SyntaxError {}
class MyTypeError extends TypeError {}
class MyURIError extends URIError {}
if (typeof AggregateError !== 'undefined') {
  class MyAggregateError extends AggregateError {}
}
if (typeof SuppressedError !== 'undefined') {
  class MySuppressedError extends SuppressedError {}
}