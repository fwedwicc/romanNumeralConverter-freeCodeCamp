function convertToRoman(num) {
  const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  let result = '';

  Object.keys(romanNumerals).reverse().forEach(value => {
    const numeral = romanNumerals[value];
    const quotient = Math.floor(num / value);

    result += numeral.repeat(quotient);
    num -= quotient * value;
  });

  return result;
}

function handleConversion() {
  const userInput = document.getElementById("number").value;
  const parsedInput = parseInt(userInput, 10);
  const result = document.querySelector("#output");

  if (!isNaN(parsedInput)) {
    if (parsedInput >= 1 && parsedInput <= 3999) {
      const romanNumeral = convertToRoman(parsedInput);
      result.innerText = romanNumeral;
    } else if (parsedInput === -1) {
      result.innerText = "Please enter a number greater than or equal to 1.";
    } else if (parsedInput >= 4000) {
      result.innerText = "Please enter a number less than or equal to 3999.";
    } else {
      result.innerText = "Please enter a valid number";
    }
  } else {
      result.innerText = "Please enter a valid number";
  }
}
