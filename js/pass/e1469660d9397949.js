const expectedHours = new Temporal.Duration(0, 0, 0, 0, -24, -34, -4, -404, -442, -800);
const resultHours1 = Temporal.Duration.compare("-PT24.567890123H", expectedHours);
const resultHours2 = Temporal.Duration.compare(expectedHours, "-PT24.567890123H");
const expectedMinutes = new Temporal.Duration(0, 0, 0, 0, 0, -1440, -34, -73, -407, -380);
const resultMinutes1 = Temporal.Duration.compare("-PT1440.567890123M", expectedMinutes);
const resultMinutes2 = Temporal.Duration.compare("-PT1440.567890123M", expectedMinutes);