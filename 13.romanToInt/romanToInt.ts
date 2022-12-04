type RomanChar = "I" | "V" | "X" | "L" | "C" | "D" | "M";
type RomanSpecialChar = "CM" | "CD" | "XC" | "XL" | "IX" | "IV";

const RomanValues: Record<RomanChar, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const RomanSpecialValues: Record<RomanSpecialChar, number> = {
  CM: 900,
  CD: 400,
  XC: 90,
  XL: 40,
  IX: 9,
  IV: 4,
};

const AllRomanChars = Object.keys({
  ...RomanValues,
  ...RomanSpecialValues,
});

function isRomanSpecialValue(s: string) {
  return Object.keys(RomanSpecialValues).includes(s);
}

// This function name is incorrect
function getValueForRomanSpecialChars(s: string): number {
  return RomanSpecialValues[s as RomanSpecialChar];
}

function getValueForRomanChars(s: string): number {
  return RomanValues[s as RomanChar];
}

/**
 * Converts roman characters to number
 */
function romanToInt(s: string): number {
  let result = 0;
  let i = 0;

  while (i < s.length) {
    let multiChars = s.charAt(i) + s.charAt(i + 1);

    if (isRomanSpecialValue(multiChars)) {
      result += getValueForRomanSpecialChars(multiChars);
      i += 2;
    } else {
      result += getValueForRomanChars(s[i]);
      i += 1;
    }
  }

  return result;
}

export { romanToInt };
