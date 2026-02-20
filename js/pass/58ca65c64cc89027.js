for (const numericLikeStyle of ["numeric", "2-digit"]) {
  var opts = new Intl.DurationFormat([], {
    hours: numericLikeStyle
  }).resolvedOptions();
}