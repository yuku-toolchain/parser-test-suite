var errors = [];
var message = "my-message";
var cause = {
  message: "my-cause"
};
var error = new AggregateError(errors, message, {
  cause
});