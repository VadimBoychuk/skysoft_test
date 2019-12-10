const isValid = string => {
  if (string.length <= 1) return false;

  let matchingOpeningBracket, character;
  const stack = [];
  const openingBrackets = ["[", "{", "("];
  const closingBrackets = ["]", "}", ")"];

  for (let i = 0; i < string.length; i++) {
    character = string[i];

    if (closingBrackets.indexOf(character) > -1) {
      matchingOpeningBracket =
        openingBrackets[closingBrackets.indexOf(character)];
      if (stack.length == 0 || stack.pop() != matchingOpeningBracket) {
        return false;
      }
    } else {
      stack.push(character);
    }
  }

  return stack.length == 0;
};

console.log(isValid("([)]"));
console.log(isValid("()"));
console.log(isValid("{}[]()"));
console.log(isValid("{[}]"));
console.log(isValid("[{()()}(){{}}}}][]"));
console.log(isValid("[(){}]"));
console.log(isValid("({[]})"));
