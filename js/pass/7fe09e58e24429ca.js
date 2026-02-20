[{
  overflow: 'constrain'
}, {
  overflow: 'reject'
}].forEach(function (validOptions) {
  let d = new Temporal.PlainDate(1, 2, 3);
  let d2 = Temporal.PlainDate.from(d, validOptions);
});