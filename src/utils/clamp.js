function clamp(value, min = 0, max = 100) {
  return Math.max(Math.min(value, max), min);
}

export default clamp;
