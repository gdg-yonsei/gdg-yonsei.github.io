function getRandomArbitraryNumber(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}

export default getRandomArbitraryNumber;
