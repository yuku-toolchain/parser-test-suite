var appointment = {};
var data1 = 1001;
Object.defineProperty(appointment, "startTime", {
  get: function () {
    return data1;
  },
  enumerable: false,
  configurable: false
});
var data2 = "NAME";
Object.defineProperty(appointment, "name", {
  get: function () {
    return data2;
  },
  enumerable: false,
  configurable: true
});
var meeting = Object.create(appointment);
var data3 = "In-person meeting";
Object.defineProperty(meeting, "conferenceCall", {
  get: function () {
    return data3;
  },
  enumerable: false,
  configurable: false
});
var teamMeeting = Object.create(meeting);
try {
  teamMeeting.name = "IE Team Meeting";
} catch (e) {}
try {
  var dateObj = new Date("10/31/2010 08:00");
  teamMeeting.startTime = dateObj;
} catch (e) {}
try {
  teamMeeting.conferenceCall = "4255551212";
} catch (e) {}