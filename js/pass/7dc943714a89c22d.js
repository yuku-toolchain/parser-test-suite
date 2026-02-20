for (var year = 1970; year < 1975; year++) {
  for (var month = 1; month < 13; month++) {
    const date = Temporal.PlainYearMonth.from({
      year,
      month
    });
  }
}