const echo = value => {
  return value;
};

const shout = value => {
  return value.toUpperCase();
};

const repeat = (value, numOfRepeat) => {
  let result = "";
  for (let i = 0; i < numOfRepeat; i++) {
    result += value + " ";
  }

  return result.trim();
};

const startOfWord = (value, numberToReturn) => {
  if (value.length >= numberToReturn) {
    return value.substring(0, numberToReturn);
  }
};

const firstWord = value => {
  return value.split(" ")[0];
};

module.exports = {
  echo,
  shout,
  repeat,
  startOfWord,
  firstWord
};
