# ExtraMath.js
Normalizes access of experimental JavaScript Math methods across browsers, adds several new Math functions, and does not require any dependencies.

ExtraMath.js introduces five new functions to the JavaScript Math prototype: **fact**, **logb**, **mean**, **nthroot**, and **randomr**.  No static Math functions are overwritten by this library.  Each of the additional functions added to ExtraMath.js that can return a decimal number can have an additional `prec` argument added to them that sets the **maximum** number of decimal points to display when that function is evaluated.  *This only applies to all of those functions that are not in the current or future Math specifications of JavaScript*. 

You can check out the Mozilla Developer Network for all of the experimental Math functions that were added to ExtraMath.js.  All experimental functions will work on all browsers that at least support the current static Math functions.  Experimental functions are designated with a beaker next to their name.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

###fact
**fact** is short for **factorial** and will evaluate a given number to its factorial i.e.
```javascript
//Usage: Math.fact(arg);
console.log(Math.fact(7)); //Evaluates to 5040, 7*6*5*4*3*2*1
```

###logb
**logb** is a logarithm function that allows you to specify a base and number, instead of having to construct this logarithm yourself.
```javascript
//Usage: Math.logb(base, number);
console.log(Math.logb(8, 8));//Evalutes the base 8 logarithm of 8 which is 1
```

###mean
**mean** is a function that calculates the average of a series of numbers. It can take any number of arguments.  Arguments can be passed in as comma separated strings or numbers or as an array. 
```javascript
//Usage: Math.mean(n, n1, n2, ...);
//Or Math.mean(arrayVar);
console.log(Math.mean(5,1)); //Evalutes to 3
console.log(Math.mean([5,1])); //Evaluates to 3
console.log(Math.mean(['5','1'])); //Evaluates to 3
```

###nthroot
**nthroot** is a function that calculates the specified root of a given number.  
```javascript
//Usage: Math.nthroot(number, root);
console.log(Math.nthroot(27, 3)); //Returns the 3rd root of 27, which is 3
```

###randomr
**randomr** returns a random number within a specified minimum and maximum range, inclusive of the minimum and maximum. 
```javascript
//Usage: Math.randomr(min, max);
console.log(Math.randomr(50, 100)); //Returns a number between 50-100, inclusive
```
