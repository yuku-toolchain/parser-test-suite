const dateTime = new Temporal.PlainDateTime(1976, 11, 18, 15, 23);
const tests = [["1976-11-18T15:23", "uppercase T"], ["1976-11-18t15:23", "lowercase T"], ["1976-11-18 15:23", "space between date and time"]];
tests.forEach(([arg, description]) => {});