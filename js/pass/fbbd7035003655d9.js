const yearMonth = new Temporal.PlainYearMonth(2019, 12);
const tests = [["2019-12-15T15:23", "uppercase T"], ["2019-12-15t15:23", "lowercase T"], ["2019-12-15 15:23", "space between date and time"]];
tests.forEach(([arg, description]) => {});