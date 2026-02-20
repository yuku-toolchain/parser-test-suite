const legacyNames = ["Etc/GMT0", "GMT0", "GMT-0", "GMT+0", "EST5EDT", "CST6CDT", "MST7MDT", "PST8PDT"];
legacyNames.forEach(arg => {
  const instance = new Temporal.ZonedDateTime(0n, arg);
});