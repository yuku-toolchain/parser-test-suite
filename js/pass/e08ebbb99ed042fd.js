var message = "my-message";
var cause = {
  message: "my-cause"
};
var error = new Error(message, {
  cause
});