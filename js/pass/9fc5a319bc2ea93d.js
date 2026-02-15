var appointment = new Object();
Object.defineProperty(appointment, "startTime", {
  value: 1001,
  writable: false,
  enumerable: false,
  configurable: true
});
Object.defineProperty(appointment, "name", {
  value: "NAME",
  writable: false,
  enumerable: false,
  configurable: true
});
var meeting = Object.create(appointment);
Object.defineProperty(meeting, "conferenceCall", {
  value: "In-person meeting",
  writable: false,
  enumerable: false,
  configurable: true
});
var teamMeeting = Object.create(meeting);
var dateObj = new Date("10/31/2010 08:00");