const checkAnagram = (first_value, second_value) => {
  first_value = first_value
    .toString()
    .toLowerCase()
    .split("")
    .filter(value => /[A-Za-z]/.test(value) || /[0-9]/.test(value))
    .sort()
    .join();

  second_value = second_value
    .toString()
    .toLowerCase()
    .split("")
    .filter(value => /[A-Za-z]/.test(value) || /[0-9]/.test(value))
    .sort()
    .join();

  if (first_value === second_value) return true;

  return false;
};
console.log(checkAnagram("whyznot", "dsdsad"));
console.log(checkAnagram("dsd111 ..//sad", "dsd111 ...sad"));
console.log(checkAnagram("fin2der", "friend2"));
console.log(checkAnagram(0, 0));
console.log(checkAnagram(123, 777));
console.log(checkAnagram(123, 231));
