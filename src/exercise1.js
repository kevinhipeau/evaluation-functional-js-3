const moment = require("moment");

const sortProduct = input => {
  let tmp = input.filter(p => moment(p.dateAdded).year() > 2000).sort((x, y) => x.dateAdded - y.dateAdded).reduce((acc, p) => {
    var tmp = moment(p.dateAdded);
    if (acc[p.name] == undefined) {
      acc[p.name] = [{ name: p.name, year: tmp.year(), monthOfYear: tmp.month() + 1, quantity: p.quantity }];
    } else {
      acc[p.name].push({ name: p.name, year: tmp.year(), monthOfYear: tmp.month() + 1, quantity: p.quantity });
    }
    return acc;
  }, {});
  console.log(tmp);
  return tmp;
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
