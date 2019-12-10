const checkNumbers = number => {
  if (typeof number !== "number") return "only for numbers";
  const list = [];
  for (let i = 1; i <= number; i++) {
    let text = "";
    if (i % 3 === 0) {
      text += "three";
    }
    if (i % 5 === 0) {
      text += "five";
    }
    if (text) {
      list.push(text);
      continue;
    }

    list.push(i);
  }
  return list.toString();
};

console.log(checkNumbers("string"));
console.log(checkNumbers(15));
