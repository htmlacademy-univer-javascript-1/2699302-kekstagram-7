//Функция для проверки длины строки.
function stringLengthCheck(string, maxLength) {
  return string.length <= maxLength;
}

//Функция для проверки, является ли строка палиндромом.
function stringPalindromeCheck(string) {
  const lowerString = string.toLowerCase();
  const cleanString = lowerString.replaceAll(' ', '');
  const reversedString = cleanString.split('').reverse().join(''); // Переворачивает строку.
  return cleanString === reversedString;
}

//Функция для извлечения цифр из строки или числа.
function extractDigits(value){
  const stringValue = String(value);
  const digitsOnly = stringValue.replace(/\D/g, '');
  if (digitsOnly === '') {
    return NaN;
  }
  return Number(digitsOnly);
}

