# ExtraMath.js
Normalizes access of experimental JavaScript Math methods across browsers, adds several new Math functions, and does not require any dependencies.

ExtraMath.js introduces five new functions to the JavaScript Math prototype: **ftor**, **logb**, **mean**, **nthroot**, and **randomr**.  No static Math functions are overwritten by this library.

###ftor
**ftor** is short for **factorial** and will evaluate a given number to its factorial i.e.
```javascript
//Usage: Math.ftor(arg);
console.log(Math.ftor(7)); //Evaluates to 5040, 7*6*5*4*3*2*1
```

###logb
**logb** is a logarithm function that allows you to specify a base and number, instead of having to construct this logarithm yourself.
```javascript
//Usage: Math.logb(base, number);
console.log(Math.logb(8, 8)); //Usage: (base, arg, [prec]), Evalutes to 1
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
//Usage: Math.nthroot(root, number);
console.log(Math.nthroot(3, 27)); //Returns the 3rd root of 27, which is 3
```

###randomr
**randomr** returns a random number within a specified minimum and maximum range, inclusive of the minimum and maximum. 
```javascript
//Usage: Math.randomr(min, max);
console.log(Math.randomr(50, 100)); //Returns a number between 50-100, inclusive
```
