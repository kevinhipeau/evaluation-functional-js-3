const _ = require("lodash");

const meeteek = input => {
  return input.reduce((acc, perso) => {
    acc[perso.firstname] = input.filter(findp => _.intersection(findp.interests, perso.interests).length > 0 && perso.sexPartnerApproved.includes(findp.sex) && perso.firstname != findp.firstname)
      .reduce((accp, persook) => {
        accp.push({ firstname: persook.firstname, commonInterests: _.intersection(persook.interests, perso.interests) })
        return accp;
      }, []);

    return acc;
  }, {})
};

module.exports = {
  title: "Exercise 3",
  run: meeteek
};
