function Timer(ms) {
  return () => new Promise((res) => setTimeout(res, ms));
}

export default Timer;
