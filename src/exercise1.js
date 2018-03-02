const moment = require("moment");

const sortProduct = input => {
  return input.filter(p => moment(p.dateAdded).year() > 2000).sort(p => !p.dateAdded).reduce((acc, p) => {
    var tmp = moment(p.dateAdded);
    acc[p.name] = [{ name: p.name, year: tmp.year(), monthOfYear: tmp.month() + 1, quantity: p.quantity }];
    return acc;
  }, {});
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
