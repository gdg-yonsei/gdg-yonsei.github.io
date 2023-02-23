const mapNumber = (x, a, b, c, d) => {
  return ((x - a) * (d - c)) / (b - a) + c;
};

export default mapNumber;
