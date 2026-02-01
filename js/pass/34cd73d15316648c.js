let d1 = new Temporal.PlainDate(1911, 10, 10);
let d2 = d1.withCalendar('roc');
TemporalHelpers.assertPlainDate(d2, 0, 10, 'M10', 10, '', 'broc', 1);
let d3 = d2.withCalendar('iso8601');
TemporalHelpers.assertPlainDate(d3, 1911, 10, 'M10', 10);