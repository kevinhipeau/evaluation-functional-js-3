const countSequence = (sequence, input) => {
  if (input !== undefined) {
    return sequence.length === 0 ? 0 : input.split(sequence).length - 1;
  }
  return function (input) {
    console.log(input);
    return sequence.length === 0 ? 0 : input.split(sequence).length - 1;
  }


};

module.exports = {
  title: "Exercise 4",
  run: countSequence
};
