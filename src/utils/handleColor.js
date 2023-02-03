const { theme } = require("@styles/global-theme");

function handleColor(inputColor) {
  const { color } = theme;

  switch (inputColor) {
    case "red":
      return color.red;

    case "blue":
      return color.blue;

    case "green":
      return color.green;

    case "yellow":
      return color.yellow;

    default:
      return inputColor;
  }
}

export default handleColor;
