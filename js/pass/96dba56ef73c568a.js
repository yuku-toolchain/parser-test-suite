let d1 = new Temporal.PlainDateTime(1911, 10, 10, 4, 5, 6, 7, 8, 9);
let d2 = d1.withCalendar('roc');
TemporalHelpers.assertPlainDateTime(d2, 0, 10, 'M10', 10, 4, 5, 6, 7, 8, 9, '', 'broc', 1);
let d3 = d2.withCalendar('iso8601');
TemporalHelpers.assertPlainDateTime(d3, 1911, 10, 'M10', 10, 4, 5, 6, 7, 8, 9);