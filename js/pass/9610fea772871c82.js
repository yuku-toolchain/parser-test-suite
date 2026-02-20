const calendar = "chinese";
const options = {
  overflow: "reject"
};
const longLeapMonth = Temporal.PlainDateTime.from({
  year: 2017,
  monthCode: "M06L",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date0130 = Temporal.PlainDateTime.from({
  year: 2019,
  monthCode: "M01",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date0230 = Temporal.PlainDateTime.from({
  year: 2018,
  monthCode: "M02",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date0330 = Temporal.PlainDateTime.from({
  year: 2019,
  monthCode: "M03",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date0430 = Temporal.PlainDateTime.from({
  year: 2018,
  monthCode: "M04",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date0530 = Temporal.PlainDateTime.from({
  year: 2019,
  monthCode: "M05",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date0630 = Temporal.PlainDateTime.from({
  year: 2022,
  monthCode: "M06",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date0730 = Temporal.PlainDateTime.from({
  year: 2018,
  monthCode: "M07",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date0830 = Temporal.PlainDateTime.from({
  year: 2019,
  monthCode: "M08",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date0930 = Temporal.PlainDateTime.from({
  year: 2021,
  monthCode: "M09",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date1030 = Temporal.PlainDateTime.from({
  year: 2022,
  monthCode: "M10",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date1130 = Temporal.PlainDateTime.from({
  year: 2021,
  monthCode: "M11",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
const date1230 = Temporal.PlainDateTime.from({
  year: 2022,
  monthCode: "M12",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
TemporalHelpers.assertPlainDateTime(longLeapMonth.with({
  year: 2025
}), 2025, 7, "M06L", 29, 12, 34, 0, 0, 0, 0, "long M06L constrains to 29 when adjusting to year with short M06L");
TemporalHelpers.assertPlainDateTime(date0130.with({
  year: 2018
}), 2018, 1, "M01", 29, 12, 34, 0, 0, 0, 0, "M01-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date0230.with({
  year: 2019
}), 2019, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "M02-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date0330.with({
  year: 2018
}), 2018, 3, "M03", 29, 12, 34, 0, 0, 0, 0, "M03-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date0430.with({
  year: 2019
}), 2019, 4, "M04", 29, 12, 34, 0, 0, 0, 0, "M04-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date0530.with({
  year: 2018
}), 2018, 5, "M05", 29, 12, 34, 0, 0, 0, 0, "M05-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date0630.with({
  year: 2021
}), 2021, 6, "M06", 29, 12, 34, 0, 0, 0, 0, "M06-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date0730.with({
  year: 2019
}), 2019, 7, "M07", 29, 12, 34, 0, 0, 0, 0, "M07-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date0830.with({
  year: 2018
}), 2018, 8, "M08", 29, 12, 34, 0, 0, 0, 0, "M08-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date0930.with({
  year: 2022
}), 2022, 9, "M09", 29, 12, 34, 0, 0, 0, 0, "M09-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date1030.with({
  year: 2021
}), 2021, 10, "M10", 29, 12, 34, 0, 0, 0, 0, "M10-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date1130.with({
  year: 2022
}), 2022, 11, "M11", 29, 12, 34, 0, 0, 0, 0, "M11-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date1230.with({
  year: 2021
}), 2021, 12, "M12", 29, 12, 34, 0, 0, 0, 0, "M12-30 constrains to 29");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M02"
}), 2019, 2, "M02", 29, 12, 34, 0, 0, 0, 0, "29-day M02 constrains");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M03"
}, options), 2019, 3, "M03", 30, 12, 34, 0, 0, 0, 0, "30-day M03 does not reject 30");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M04"
}), 2019, 4, "M04", 29, 12, 34, 0, 0, 0, 0, "29-day M04 constrains");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M05"
}, options), 2019, 5, "M05", 30, 12, 34, 0, 0, 0, 0, "30-day M05 does not reject 30");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M06"
}), 2019, 6, "M06", 29, 12, 34, 0, 0, 0, 0, "29-day M06 constrains");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M07"
}), 2019, 7, "M07", 29, 12, 34, 0, 0, 0, 0, "29-day M07 constrains");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M08"
}, options), 2019, 8, "M08", 30, 12, 34, 0, 0, 0, 0, "30-day M08 does not reject 30");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M09"
}), 2019, 9, "M09", 29, 12, 34, 0, 0, 0, 0, "29-day M09 constrains");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M10"
}), 2019, 10, "M10", 29, 12, 34, 0, 0, 0, 0, "29-day M10 constrains");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M11"
}, options), 2019, 11, "M11", 30, 12, 34, 0, 0, 0, 0, "30-day M11 does not reject 30");
TemporalHelpers.assertPlainDateTime(date0130.with({
  monthCode: "M12"
}, options), 2019, 12, "M12", 30, 12, 34, 0, 0, 0, 0, "30-day M12 does not reject 30");