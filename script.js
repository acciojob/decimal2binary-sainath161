function decimalToBinary(num) {
  //Write you code here
  if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    return "Invalid input. Please enter a non-negative integer.";
  }

  // Special case for 0
  if (num === 0) {
    return "0";
  }

  let binary = "";
  while (num > 0) {
    // Append the remainder of the division by 2 to the binary string
    binary = (num % 2) + binary;
    // Divide the decimal number by 2 and take the integer part
    num = Math.floor(num / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
