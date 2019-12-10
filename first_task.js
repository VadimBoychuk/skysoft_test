const checkVowels = string => {
  if (typeof string !== "string") return "only for string";

  const vowels = ["a", "e", "i", "o", "u"];
  const filteredArray = [];
  let total = 0;

  vowels.forEach(item => {
    const countOfLetters = string
      .toLowerCase()
      .split("")
      .filter(el => el == item).length;

    if (countOfLetters) {
      total += countOfLetters;
      filteredArray.push(`${[item]}:${countOfLetters}`);
    }
  });

  if (!total) return "string has no vowels";
  return `${filteredArray.join(", ")}, total:${total}`;
};

console.log(checkVowels("why not"));
console.log(checkVowels("hello"));
console.log(checkVowels("vvvv"));
console.log(checkVowels("HEEEy, i'm JavaScript developer, O Uu"));
