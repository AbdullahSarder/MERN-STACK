price1=22
price2=50

console.log(price1+price2) //plus
console.log(price1-price2) //minus
console.log(price1*price2)//multply
console.log(price1/price2) //devide
console.log(price1%price2) //reminder after division

// try to add new price 
name ='T-shirt'
price=90
price -=10 //price after 10 duscount

console.log(price)

price += 20; //price after 20 increase
console.log(price);
price %= 20; //price after 20 increase
console.log(price);



// Only for plus + operator turn string when any of the variable or value is string but rest of operator operate properly

console.log(20+20)
console.log(20+'20')
console.log(40-20)
console.log(40-'20')
console.log(20*3)
console.log('20'*3)
console.log(20/3)
console.log('20'/3)

// isNaN is a built-in JavaScript function used to determine whether a value is NaN (Not-a-Number)
console.log(isNaN(2));
console.log(isNaN("Hello")); // true (cannot convert to a number)
console.log(isNaN("123abc")); // true (partial string fails conversion)
console.log(isNaN(""));



// null is a special value in JavaScript that represents the intentional absence of any object value. It is one of JavaScript's primitive data types and is often used to signify "no value" or "empty."
console.log(typeof null); // "object"

let user = { name: "John" };
console.log(user); // { name: "John" }
user = null;
console.log(user); // null
user = null;
if (user === null) {
  console.log("The user variable is null."); // Output
}
