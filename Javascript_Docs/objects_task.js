//1.Write a function that takes an array of objects as an argument and returns an array of the keys of each object using for...in iteration.

function getKeys(arr) {
  let result = [];
  for (let i of arr) {
    let keys = [];
    for (let j in i) {
      keys.push(j);
    }
    result.push(keys);
  }
  return result;
}

let input = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 },
];
let output = getKeys(input);
console.log(output);

// Output: [["a", "b"], ["c", "d"], ["e", "f"]]

//2.Write a function that takes an array of objects as an argument and returns an array of the values of each object using for...in iteration.

function getValues(arr) {
  let res = [];
  for (let i of arr) {
    let values = [];
    for (let j in i) {
      values.push(i[j]);
    }
    res.push(values);
  }
  return res;
}

let x = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 },
];
let result = getValues(x);
console.log(result);

//Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

//3.Write a function that takes an array of objects as an argument and returns a new array with only the objects that have a specific property using for...in iteration.

function uniqueObject(arr, chk) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    let c = false;
    for (let key in obj) {
      if (key === chk) {
        c = true;
        break;
      }
    }
    if (c) {
      res[res.length] = obj;
    }
  }
  return res;
}

let x = [{ a: 1 }, { b: 2 }, { a: 3, b: 4 }];
let check = "a";
let result = uniqueObject(x, check);
console.log(result);

//Output: [{ a: 1 }, { a: 3, b: 4 }]

/* -------------------------End------------------------- */

function uniqueObject(arr, check) {
  let res = [];
  for (let i of arr) {
    for (let key in i) {
      if (key === check) {
        res.push(i);
        break;
      }
    }
  }
  return res;
}

let x = [{ a: 1 }, { b: 2 }, { a: 3, b: 4 }];
let result = uniqueObject(x, "a");
console.log(result);

//Output: [{ a: 1 }, { a: 3, b: 4 }]

//4.Write a function that takes an array of objects as an argument and returns a new array with the objects sorted by a specific property using for...in iteration.

function sort(arr, chk) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i];
  }

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res.length - i - 1; j++) {
      let value1, value2;

      for (let key in res[j]) {
        if (key === chk) {
          value1 = res[j][key];
          break;
        }
      }

      for (let key in res[j + 1]) {
        if (key === chk) {
          value2 = res[j + 1][key];
          break;
        }
      }

      if (value1 > value2) {
        let temp = res[j];
        res[j] = res[j + 1];
        res[j + 1] = temp;
      }
    }
  }

  return res;
}

let x = [{ a: 2 }, { a: 1 }, { a: 3 }];
let check = "a";
let result = sort(x, check);
console.log(result);

//Output: [{ a: 1 }, { a: 2 }, { a: 3 }]

/* -------------------------End------------------------- */

function sort(arr, check) {
  let res = [];
  let obj = {};
  for (let i in arr) {
    obj = arr[i];
    let c = false;
    for (let j in res) {
      if (obj[check] < res[j][check]) {
        res.splice(j, 0, obj);
        c = true;
        break;
      }
    }
    if (!c) {
      res.push(obj);
    }
  }
  return res;
}

let x = [{ a: 2 }, { a: 1 }, { a: 3 }];
let result = sort(x, "a");
console.log(result);

//5.Write a function that takes an array of objects as an argument and returns a new object with the properties from all the objects in the array using for...in iteration.

function merge(arr) {
  let res = {};

  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        res[key] = obj[key];
      }
    }
  }

  return res;
}

let x = [{ a: 1 }, { b: 2 }, { c: 3 }];
let result = merge(x);
console.log(result);

//Output: { a: 1, b: 2, c: 3 }

/* -------------------------End------------------------- */

function merge(arr) {
  let res = {};
  for (let i of arr) {
    for (let key in i) {
      res[key] = i[key];
    }
  }
  return res;
}

let x = [{ a: 1 }, { b: 2 }, { c: 3 }];
let result = merge(x);
console.log(result);

//Output: { a: 1, b: 2, c: 3 }
