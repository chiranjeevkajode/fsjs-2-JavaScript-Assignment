// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

//Boolean True Condtions

let num = (10>9);
const obj = {
    prop: 'exists'
  };
  const obj1 = {};
  obj1.num2 = 42;
console.log(Object.hasOwn(obj, 'prop'));
console.log(num);
console.log(obj1.hasOwnProperty('num2'));

//Boolean False Conditions

let num3 = (10>11);
const obj2 = {
    prop: 'exists'
  };
  const obj3 = {};
  obj1.num3 = 42;
console.log(Object.hasOwn(obj2, 'anything'));
console.log(num3);
console.log(obj3.hasOwnProperty('num'));
