var badDelete = new Proxy([0], {
  deleteProperty: function () {}
});