module.exports = function toReadable (number) {
  return getNumberAsString(number);
}

function getNumberAsString(number) {
  
  if (number === 0) {
    return "zero";
  }

  const result = [];
  const arrayOfDigit = number.toString().split('');
  
  // Hundreds
  if (arrayOfDigit.length === 3) {
    const resultHundreds = convertNumberToString(arrayOfDigit.shift());
    result.push(`${resultHundreds} hundred`);
  };

  // Decades
  if (arrayOfDigit.length === 2) {
    
    let dec = arrayOfDigit.shift();
    if (dec === "1") {
      dec = dec + arrayOfDigit.shift(); // 10, 11, 12,..., 19
    } else {
      dec = dec + "0"; // 00, 20, 30, 40,..., 90
    }
  
    const resultDecades = convertNumberToString(dec);
    if (resultDecades != undefined) {
      result.push(resultDecades);
    };

  };

  // Units
  if (arrayOfDigit.length === 1) {
    const resultUnits = convertNumberToString(arrayOfDigit.shift());    
    if (resultUnits != undefined) {
      result.push(resultUnits);
    };
  };

  return result.join(" ");

}

function convertNumberToString(str) {
  switch (str) {
    case "1":
      return "one";
    case "2":
      return "two";
    case "3":
      return "three";
    case "4":
      return "four";
    case "5":
      return "five";
    case "6":
      return "six";
    case "7":
      return "seven";
    case "8":
      return "eight";
    case "9":
      return "nine";    
    case "10":
      return "ten";
    case "11":
      return "eleven";
    case "12":
      return "twelve";
    case "13":
      return "thirteen";
    case "14":
      return "fourteen";
    case "15":
      return "fifteen";
    case "16":
      return "sixteen";
    case "17":
      return "seventeen";
    case "18":
      return "eighteen";
    case "19":
      return "nineteen";
    case "20":
      return "twenty";
    case "30":
      return "thirty";
    case "40":
      return "forty";
    case "50":
      return "fifty";
    case "60":
      return "sixty";
    case "70":
      return "seventy";
    case "80":
      return "eighty";
    case "90":
      return "ninety";
    default:
      return undefined;
  }
}