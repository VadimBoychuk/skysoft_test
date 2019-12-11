// We can also compare objects using lodash, too
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

console.log(
  "second method --------------------------------------------------------------------"
);

const compareSecondMethod = (firstObj, secObj) => {
  const sortObject = obj => {
    return Object.keys(obj)
      .sort()
      .reduce((accumulator, currentKey) => {
        if (typeof obj[currentKey] == "object")
          obj[currentKey] = sortObject(obj[currentKey]);
        return { ...accumulator, [currentKey]: obj[currentKey] };
      }, {});
  };

  if (
    JSON.stringify(sortObject(firstObj)) === JSON.stringify(sortObject(secObj))
  )
    return true;

  return false;
};

console.log(compareSecondMethod({ a: 1, b: 2 }, { b: 2, a: 1 }));
console.log(compareSecondMethod({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, d: 4 }));
console.log(compareSecondMethod({ a: 1, b: 2 }, { b: 2, a: 1 }));
console.log(
  compareSecondMethod({ a: 1, b: 2, c: { a: 1 } }, { a: 1, b: 2, c: { a: 1 } })
);
console.log(compareSecondMethod({ a: 1, b: 1 }, { a: 1, b: 2 }));
console.log(compareSecondMethod({ a: 1, b: 1 }, { a: 1, b: { c: 2 } }));
console.log(
  compareSecondMethod(
    { a: 1, b: { c: { d: { d: 2 } } } },
    { b: { c: { d: { d: 2 } } }, a: 1 }
  )
);
