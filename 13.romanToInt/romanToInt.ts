function shouldReduce(s: string) {
  return (
    s === "CM" ||
    s === "CD" ||
    s === "XC" ||
    s === "XL" ||
    s === "IX" ||
    s === "IV"
  );
}

// This function name is incorrect
function getValueForRomanChars(s: string): number {
  switch (s) {
    case "CM":
      return 900;
    case "CD":
      return 400;
    case "XC":
      return 90;
    case "XL":
      return 40;
    case "IX":
      return 9;
    case "IV":
      return 4;

    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}

/**
 * Converts roman characters to number
 */
function romanToInt(s: string): number {
  let result = 0;
  let i = 0;

  while (i < s.length) {
    let multiChars = s.charAt(i) + s.charAt(i + 1);

    if (shouldReduce(multiChars)) {
      result += getValueForRomanChars(multiChars);
      i += 2;
    } else {
      result += getValueForRomanChars(s[i]);
      i += 1;
    }
  }

  return result;
}

export { romanToInt };
