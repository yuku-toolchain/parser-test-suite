let getMonth = false;
let getMonthCode = false;
const missingYearAndMonth = {
  get month() {
    getMonth = true;
  },
  get monthCode() {
    getMonthCode = true;
  }
};