"use strict";

// 1 let x = 5; alert(++x);
// console.log(x);

// 2 [ ] + false - null + true
// console.log(([] + false - null + true)); // NaN

// 3 let y = 1;
// let x = y = 2;
// alert(x); // 2

// 4 console.log(typeof([] + 1 + 2)); // 12

// 5 alert( "1"[0]);

// 6 console.log(2 && 1 && null && 0 && undefined );
// И (&&) запинается на лжи.
// ИЛИ (||) запинается на правде.

// 7 console.log(!!( 1 && 2 ) === (1 && 2));
            // 3
// 8 alert( null || 2 && 3 || 4 ); 

// 9 const a = [1, 2, 3];
//  const b = [1, 2, 3];

//  console.log(a == b);
 
// 10 alert(+'Infinity');

// 11 console.log("Ёжик" > "яблоко");
                    // 2
// 12 console.log(0 || "" || 2 || undefined || true || falsе );

// 0 и "" - это false, а 2 в логическом контексте true. И или на это м и остановится т.к. дальше код не идёт.