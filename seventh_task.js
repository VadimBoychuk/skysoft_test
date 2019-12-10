const compare = (firstObj, secObj) => {
  for (let key in firstObj) {
    if (firstObj.hasOwnProperty(key) !== secObj.hasOwnProperty(key))
      return false;
    if (typeof firstObj[key] !== "object") {
      if (firstObj[key] !== secObj[key]) return false;
    }
    if (typeof firstObj[key] === "object") {
      if (!compare(firstObj[key], secObj[key])) return false;
    }
  }
  for (let key in secObj) {
    if (typeof firstObj[key] === "undefined") return false;
  }
  return true;
};
console.log(compare({ a: 1, b: 2 }, { b: 2, a: 1 }));
console.log(compare({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, d: 4 }));
console.log(compare({ a: 1, b: 2 }, { b: 2, a: 1 }));
console.log(compare({ a: 1, b: 2, c: { a: 1 } }, { a: 1, b: 2, c: { a: 1 } }));
console.log(compare({ a: 1, b: 1 }, { a: 1, b: 2 }));
console.log(compare({ a: 1, b: 1 }, { a: 1, b: { c: 2 } }));
console.log(
  compare(
    { a: 1, b: { c: { d: { d: 2 } } } },
    { b: { c: { d: { d: 2 } } }, a: 1 }
  )
);
// We can also compare objects using lodash, too
