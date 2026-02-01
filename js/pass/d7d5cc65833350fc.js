const calendar = "hebrew";
const options = {
  overflow: "reject"
};
const rcM03 = Temporal.ZonedDateTime.from({
  year: 5778,
  monthCode: "M03",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const rlM03 = Temporal.ZonedDateTime.from({
  year: 5782,
  monthCode: "M03",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const ccM02 = Temporal.ZonedDateTime.from({
  year: 5783,
  monthCode: "M02",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const ccM03 = Temporal.ZonedDateTime.from({
  year: 5783,
  monthCode: "M03",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const clM02 = Temporal.ZonedDateTime.from({
  year: 5779,
  monthCode: "M02",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const clM03 = Temporal.ZonedDateTime.from({
  year: 5779,
  monthCode: "M03",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const years1n = new Temporal.Duration(1);
const years2n = new Temporal.Duration(2);
const years2 = new Temporal.Duration(-2);
const years3 = new Temporal.Duration(-3);
TemporalHelpers.assertPlainDateTime(rcM03.subtract(years3).toPlainDateTime(), 5781, 3, "M03", 29, 12, 34, 0, 0, 0, 0, "regular-year Kislev constrains to 29 in deficient year when adding", "am", 5781);
TemporalHelpers.assertPlainDateTime(clM02.subtract(years3).toPlainDateTime(), 5782, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "complete-year Cheshvan constrains to 29 in regular year when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(clM02.subtract(years2).toPlainDateTime(), 5781, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "complete-year Cheshvan constrains to 29 in deficient year when adding", "am", 5781);
TemporalHelpers.assertPlainDateTime(clM03.subtract(years2).toPlainDateTime(), 5781, 3, "M03", 29, 12, 34, 0, 0, 0, 0, "complete-year Kislev constrains to 29 in deficient year when adding", "am", 5781);
TemporalHelpers.assertPlainDateTime(rlM03.subtract(years1n).toPlainDateTime(), 5781, 3, "M03", 29, 12, 34, 0, 0, 0, 0, "regular-year Kislev constrains to 29 in deficient year when subtracting", "am", 5781);
TemporalHelpers.assertPlainDateTime(ccM02.subtract(years1n).toPlainDateTime(), 5782, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "complete-year Cheshvan constrains to 29 in regular year when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(ccM02.subtract(years2n).toPlainDateTime(), 5781, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "complete-year Cheshvan constrains to 29 in deficient year when subtracting", "am", 5781);
TemporalHelpers.assertPlainDateTime(ccM03.subtract(years2n).toPlainDateTime(), 5781, 3, "M03", 29, 12, 34, 0, 0, 0, 0, "complete-year Kislev constrains to 29 in deficient year when subtracting", "am", 5781);
const dc0130 = Temporal.ZonedDateTime.from({
  year: 5781,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const rc0130 = Temporal.ZonedDateTime.from({
  year: 5778,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const cc0130 = Temporal.ZonedDateTime.from({
  year: 5783,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const dl0130 = Temporal.ZonedDateTime.from({
  year: 5784,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const rl0130 = Temporal.ZonedDateTime.from({
  year: 5782,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const cl0130 = Temporal.ZonedDateTime.from({
  year: 5779,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const dc0130After = Temporal.ZonedDateTime.from({
  year: 5782,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const rc0130After = Temporal.ZonedDateTime.from({
  year: 5779,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const cc0130After = Temporal.ZonedDateTime.from({
  year: 5784,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const dl0130After = Temporal.ZonedDateTime.from({
  year: 5785,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const rl0130After = Temporal.ZonedDateTime.from({
  year: 5783,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const cl0130After = Temporal.ZonedDateTime.from({
  year: 5780,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const months1 = new Temporal.Duration(0, -1);
const months2 = new Temporal.Duration(0, -2);
const months3 = new Temporal.Duration(0, -3);
const months4 = new Temporal.Duration(0, -4);
const months5 = new Temporal.Duration(0, -5);
const months6 = new Temporal.Duration(0, -6);
const months7 = new Temporal.Duration(0, -7);
const months8 = new Temporal.Duration(0, -8);
const months9 = new Temporal.Duration(0, -9);
const months10 = new Temporal.Duration(0, -10);
const months11 = new Temporal.Duration(0, -11);
const months12 = new Temporal.Duration(0, -12);
const months1n = new Temporal.Duration(0, 1);
const months2n = new Temporal.Duration(0, 2);
const months3n = new Temporal.Duration(0, 3);
const months4n = new Temporal.Duration(0, 4);
const months5n = new Temporal.Duration(0, 5);
const months6n = new Temporal.Duration(0, 6);
const months7n = new Temporal.Duration(0, 7);
const months8n = new Temporal.Duration(0, 8);
const months9n = new Temporal.Duration(0, 9);
const months10n = new Temporal.Duration(0, 10);
const months11n = new Temporal.Duration(0, 11);
const months12n = new Temporal.Duration(0, 12);
const months13n = new Temporal.Duration(0, 13);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months1).toPlainDateTime(), 5778, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "regular common year Cheshvan constrains to 29 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(cc0130.subtract(months1, options).toPlainDateTime(), 5783, 2, "M02", 30, 12, 34, 0, 0, 0, 0, "regular common year Cheshvan does not reject 30 when adding", "am", 5783);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months2, options).toPlainDateTime(), 5778, 3, "M03", 30, 12, 34, 0, 0, 0, 0, "regular common year Kislev does not reject 30 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(dc0130.subtract(months2).toPlainDateTime(), 5781, 3, "M03", 29, 12, 34, 0, 0, 0, 0, "deficient common year Kislev constrains to 29 when adding", "am", 5781);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months3).toPlainDateTime(), 5778, 4, "M04", 29, 12, 34, 0, 0, 0, 0, "common-year Tevet constrains to 29 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months4, options).toPlainDateTime(), 5778, 5, "M05", 30, 12, 34, 0, 0, 0, 0, "common-year Shevat does not reject 30 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months5).toPlainDateTime(), 5778, 6, "M06", 29, 12, 34, 0, 0, 0, 0, "common-year Adar constrains to 29 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months6, options).toPlainDateTime(), 5778, 7, "M07", 30, 12, 34, 0, 0, 0, 0, "common-year Nisan does not reject 30 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months7).toPlainDateTime(), 5778, 8, "M08", 29, 12, 34, 0, 0, 0, 0, "common-year Iyar constrains to 29 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months8, options).toPlainDateTime(), 5778, 9, "M09", 30, 12, 34, 0, 0, 0, 0, "common-year Sivan does not reject 30 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months9).toPlainDateTime(), 5778, 10, "M10", 29, 12, 34, 0, 0, 0, 0, "common-year Tammuz constrains to 29 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months10, options).toPlainDateTime(), 5778, 11, "M11", 30, 12, 34, 0, 0, 0, 0, "common-year Av does not reject 30 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130.subtract(months11).toPlainDateTime(), 5778, 12, "M12", 29, 12, 34, 0, 0, 0, 0, "common-year Elul constrains to 29 when adding", "am", 5778);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months1).toPlainDateTime(), 5782, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "regular leap year Cheshvan constrains to 29 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(cl0130.subtract(months1, options).toPlainDateTime(), 5779, 2, "M02", 30, 12, 34, 0, 0, 0, 0, "regular leap year Cheshvan does not reject 30 when adding", "am", 5779);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months2, options).toPlainDateTime(), 5782, 3, "M03", 30, 12, 34, 0, 0, 0, 0, "regular leap year Kislev does not reject 30 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(dl0130.subtract(months2).toPlainDateTime(), 5784, 3, "M03", 29, 12, 34, 0, 0, 0, 0, "deficient leap year Kislev constrains to 29 when adding", "am", 5784);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months3).toPlainDateTime(), 5782, 4, "M04", 29, 12, 34, 0, 0, 0, 0, "leap-year Tevet constrains to 29 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months4, options).toPlainDateTime(), 5782, 5, "M05", 30, 12, 34, 0, 0, 0, 0, "leap-year Shevat does not reject 30 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months5, options).toPlainDateTime(), 5782, 6, "M05L", 30, 12, 34, 0, 0, 0, 0, "leap-year Adar I does not reject 30 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months6).toPlainDateTime(), 5782, 7, "M06", 29, 12, 34, 0, 0, 0, 0, "leap-year Adar II constrains to 29 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months7, options).toPlainDateTime(), 5782, 8, "M07", 30, 12, 34, 0, 0, 0, 0, "leap-year Nisan does not reject 30 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months8).toPlainDateTime(), 5782, 9, "M08", 29, 12, 34, 0, 0, 0, 0, "leap-year Iyar constrains to 29 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months9, options).toPlainDateTime(), 5782, 10, "M09", 30, 12, 34, 0, 0, 0, 0, "leap-year Sivan does not reject 30 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months10).toPlainDateTime(), 5782, 11, "M10", 29, 12, 34, 0, 0, 0, 0, "leap-year Tammuz constrains to 29 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months11, options).toPlainDateTime(), 5782, 12, "M11", 30, 12, 34, 0, 0, 0, 0, "leap-year Av does not reject 30 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130.subtract(months12).toPlainDateTime(), 5782, 13, "M12", 29, 12, 34, 0, 0, 0, 0, "leap-year Elul constrains to 29 when adding", "am", 5782);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months12n, options).toPlainDateTime(), 5778, 1, "M01", 30, 12, 34, 0, 0, 0, 0, "common-year Tishrei does not reject 30 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months11n).toPlainDateTime(), 5778, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "regular common year Cheshvan constrains to 29 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(cc0130After.subtract(months11n, options).toPlainDateTime(), 5783, 2, "M02", 30, 12, 34, 0, 0, 0, 0, "regular common year Cheshvan does not reject 30 when subtracting", "am", 5783);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months10n, options).toPlainDateTime(), 5778, 3, "M03", 30, 12, 34, 0, 0, 0, 0, "regular common year Kislev does not reject 30 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(dc0130After.subtract(months10n).toPlainDateTime(), 5781, 3, "M03", 29, 12, 34, 0, 0, 0, 0, "deficient common year Kislev constrains to 29 when subtracting", "am", 5781);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months9n).toPlainDateTime(), 5778, 4, "M04", 29, 12, 34, 0, 0, 0, 0, "common-year Tevet constrains to 29 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months8n, options).toPlainDateTime(), 5778, 5, "M05", 30, 12, 34, 0, 0, 0, 0, "common-year Shevat does not reject 30 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months7n).toPlainDateTime(), 5778, 6, "M06", 29, 12, 34, 0, 0, 0, 0, "common-year Adar constrains to 29 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months6n, options).toPlainDateTime(), 5778, 7, "M07", 30, 12, 34, 0, 0, 0, 0, "common-year Nisan does not reject 30 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months5n).toPlainDateTime(), 5778, 8, "M08", 29, 12, 34, 0, 0, 0, 0, "common-year Iyar constrains to 29 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months4n, options).toPlainDateTime(), 5778, 9, "M09", 30, 12, 34, 0, 0, 0, 0, "common-year Sivan does not reject 30 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months3n).toPlainDateTime(), 5778, 10, "M10", 29, 12, 34, 0, 0, 0, 0, "common-year Tammuz constrains to 29 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months2n, options).toPlainDateTime(), 5778, 11, "M11", 30, 12, 34, 0, 0, 0, 0, "common-year Av does not reject 30 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(rc0130After.subtract(months1n).toPlainDateTime(), 5778, 12, "M12", 29, 12, 34, 0, 0, 0, 0, "common-year Elul constrains to 29 when subtracting", "am", 5778);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months13n, options).toPlainDateTime(), 5782, 1, "M01", 30, 12, 34, 0, 0, 0, 0, "leap-year Tishrei does not reject 30 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months12n).toPlainDateTime(), 5782, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "regular leap year Cheshvan constrains to 29 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(cl0130After.subtract(months12n, options).toPlainDateTime(), 5779, 2, "M02", 30, 12, 34, 0, 0, 0, 0, "regular leap year Cheshvan does not reject 30 when subtracting", "am", 5779);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months11n, options).toPlainDateTime(), 5782, 3, "M03", 30, 12, 34, 0, 0, 0, 0, "regular leap year Kislev does not reject 30 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(dl0130After.subtract(months11n).toPlainDateTime(), 5784, 3, "M03", 29, 12, 34, 0, 0, 0, 0, "deficient leap year Kislev constrains to 29 when subtracting", "am", 5784);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months10n).toPlainDateTime(), 5782, 4, "M04", 29, 12, 34, 0, 0, 0, 0, "leap-year Tevet constrains to 29 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months9n, options).toPlainDateTime(), 5782, 5, "M05", 30, 12, 34, 0, 0, 0, 0, "leap-year Shevat does not reject 30 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months8n, options).toPlainDateTime(), 5782, 6, "M05L", 30, 12, 34, 0, 0, 0, 0, "leap-year Adar I does not reject 30 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months7n).toPlainDateTime(), 5782, 7, "M06", 29, 12, 34, 0, 0, 0, 0, "leap-year Adar II constrains to 29 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months6n, options).toPlainDateTime(), 5782, 8, "M07", 30, 12, 34, 0, 0, 0, 0, "leap-year Nisan does not reject 30 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months5n).toPlainDateTime(), 5782, 9, "M08", 29, 12, 34, 0, 0, 0, 0, "leap-year Iyar constrains to 29 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months4n, options).toPlainDateTime(), 5782, 10, "M09", 30, 12, 34, 0, 0, 0, 0, "leap-year Sivan does not reject 30 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months3n).toPlainDateTime(), 5782, 11, "M10", 29, 12, 34, 0, 0, 0, 0, "leap-year Tammuz constrains to 29 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months2n, options).toPlainDateTime(), 5782, 12, "M11", 30, 12, 34, 0, 0, 0, 0, "leap-year Av does not reject 30 when subtracting", "am", 5782);
TemporalHelpers.assertPlainDateTime(rl0130After.subtract(months1n).toPlainDateTime(), 5782, 13, "M12", 29, 12, 34, 0, 0, 0, 0, "leap-year Elul constrains to 29 when subtracting", "am", 5782);