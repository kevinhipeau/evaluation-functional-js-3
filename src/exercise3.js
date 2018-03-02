const _ = require("lodash");

const meeteek = input => {
  return input.reduce((acc, perso) => {
    acc[perso.firstname] = [];
    console.log(input.filter(findp => _.intersection(findp.interests, perso.interests).length > 0));
    perso.reduce((accp, p) => {


    }, [])
    return acc;
  }, {})
};

module.exports = {
  title: "Exercise 3",
  run: meeteek
};
