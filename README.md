# ExtraMath.js
Normalizes access of experimental JavaScript Math methods across browsers, adds several new Math functions, and does not require any dependencies.

ExtraMath.js introduces 9 new functions to the JavaScript Math prototype: **area**, **fact**, **intdiv**, **line**, **logb**, **mean**, **nck**, **nroot**, and **randomr**.  All experimental Math methods are overwritten by this library, but no static Math methods are overwritten.

There is a variable set in the beginning called `defPrec` which is used to set the maximum amount of decimal points for each answer that can return a decimal value i.e. if `decPrec = 12`, a fraction such as 1/3 would be deprecated to 0.333333333333 with 12 points of precision while a fraction such as 1/2 would still be only 0.5.  

Each function has error handling built-in that calls the function `showError`.  This way if you want to customize how errors are displayed, you only need to do so at one location, instead of having to search throughout the document to change each and every display function.

You can check out the Mozilla Developer Network for all of the experimental Math functions that were added to ExtraMath.js.  All experimental functions will work on all browsers that at least support the current static Math functions.  Experimental functions are designated with a beaker next to their name.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

The following are the methods that are not a part of the future JavaScript Math specification (but maybe should be):

##area
**area** calculates the area of a number of 2D shapes.  The arguments required vary depending on the shape except for the first argument which is always a string containing the name of the shape.  The name of the shape is either the full name of the shape or it can just be the first 3 letters.
```javascript
//Usage: Math.area(shape, [otherArgs);
```

####circle
```javascript
//Usage: Math.area('cir', radius, ['exact');
//OR: Math.area('circle', radius, ['exact');
//'exact' is an optional argument that returns a string containing the exact value of the expression
//Using the 'exact' argument will NOT return a number
console.log(Math.area('cir', 3)); //Evaluates to 28.27433..., which is 3^2 * PI.
```
`console.log(Math.area('cir', 3, 'exact');` Evalutes to 9&pi;

####ellipse
```javascript
//Usage: Math.area('ell', a, b, ['exact'); where a is either minor/major axis and b is the other axis, interchangeable
//OR: Math.area('ellipse', a, b, ['exact');
//'exact' is an optional argument that returns a string containing the exact value of the expression
//Using the 'exact' argument will NOT return a number
console.log(Math.area('ell', 3, 2)); //Evaluates to 18.84955..., which is 3 * 2 * PI.
```
`console.log(Math.area('ell', 3, 2, 'exact');` Evalutes to 6&pi;

####parallelogram
```javascript
//Usage: Math.area('par', b, h); //where b is the base and the h is the height, interchangeable 
//OR: Math.area('parallelogram', b, h);
console.log(Math.area('par', 4, 2)); //Evaluates to 8, which is 4 * 2.
```

####rectangle
```javascript
//Usage: Math.area('rec', a, b); //where a is one side and b is the other side, interchangeable
//OR: Math.area('rectangle', a, b);
console.log(Math.area('rec', 6, 3)); //Evaluates to 18, which is 6 * 3
```

####sector
```javascript
//Usage: Math.area('sec', r, angle); //where r is the radius and angle is the angle in radians, not interchangeable
//OR: Math.area('sector', r, angle);
console.log(Math.area('sec', 3, Math.PI/3)); //Evaluates to 4.71238..., which is 1/2 * 3^2 * pi/3
```

####segment
```javascript
//Returns the area of a segment of an elliptical shape
//Usage: Math.area('seg', r, angle); //where r is the radius and angle is the angle in radians, not interchangeable
//OR: Math.area('segment', r, angle);
console.log(Math.area('seg', 3, Math.PI/3)); //Evaluates to 0.81527..., which is 1/2 * 3^2 * (pi/3 - sin(pi/3))
```

####square
```javascript
//Usage: Math.area('squ', a); //where a is the measure of any side of the square
//OR: Math.area('square', a);
console.log(Math.area('squ', 5)); //Evaluates to 25, which is 5 * 5.
```

####trapezoid
```javascript
//Usage: Math.area('tra', a, b, h); //where a is the measure of the top base, b is the measure of the bottom base, and h is the vertical height
//OR: Math.area('trapezoid', a, b, h);
//a and b are interchangeable, but h must remain in the 4th argument slot
console.log(Math.area('tra', 5, 2, 3)); //Evaluates to 10.5, which is 1/2 * (5 + 2) * 3
```

####triangle
```javascript
//Usage: Math.area('tri', b, h); //where b is the base and h is the vertical height, interchangeable
//OR: Math.area('triangle', b, h);
console.log(Math.area('tri', 5, 2)); //Evaluates to 5, which is 1/2 * 5 * 2
```


##fact
**fact** is short for **factorial** and will evaluate a given number to its factorial i.e.
```javascript
//Usage: Math.fact(arg);
console.log(Math.fact(7)); //Evaluates to 5040, 7*6*5*4*3*2*1
```

##intdiv
**intdiv** is short for **Integer Division**.  This function will divide a series of numbers and return the integer portion of the quotient.  **intdiv** can take a virtually unlimited number of arguments.
```javascript
//Usage: Math.intdiv(n, n1, n2, ...);
//OR: Math.intdiv(arrayVar);
console.log(Math.intdiv(10, 3, 2)); //Evalutes to 1, which is the integer portion of 10 divided by 3 divided by 2
console.log(Math.intdiv([10, 3, 2])); //Evalutes to 1, which is the integer portion of 10 divided by 3 divided by 2
console.log(Math.intdiv(['10', '3', '2'])); //Evalutes to 1, which is the integer portion of 10 divided by 3 divided by 2
```

##line
**line** is a function that will return an object containing the slope, y-intercept, and equation of a set of 2 points.
```javascript
//Usage: Math.line(x1, y1, x2, y2); //the points can be numbers or strings
//OR: Math.line(arrayVar);
var myline = Math.line(['10', '2', '6', '4']);
console.log(myline.slope); //Returns -0.5
console.log(myline.yint); //Returns 7
console.log(myline.equation); //Returns "y = -0.5x + 7"
```

##logb
**logb** is a logarithm function that allows you to specify a base and number, instead of having to construct this logarithm yourself.
```javascript
//Usage: Math.logb(base, number);
console.log(Math.logb(8, 8));//Evalutes the base 8 logarithm of 8 which is 1
```

##mean
**mean** is a function that calculates the average of a series of numbers. This function can take a virtually unlimited number of arguments.  Arguments can be passed in as comma separated strings or numbers or as an array. 
```javascript
//Usage: Math.mean(n, n1, n2, ...);
//Or Math.mean(arrayVar);
console.log(Math.mean(5,1)); //Evalutes to 3
console.log(Math.mean([5,1])); //Evaluates to 3
console.log(Math.mean(['5','1'])); //Evaluates to 3
```

##nck
**nck** is short **n Choose k** which is used to evaluate the number of ways that *k* amount of grouped objects can be chosen from a number of *n* objects.  For more information, try visiting [this MathIsFun article about combinations and permutations.](http://www.mathsisfun.com/combinatorics/combinations-permutations.html)
```javascript
//Usage: Math.nck(n, k); //where n is the number of objects and k is the amount of objects to group together
console.log(Math.nck(6, 2)); //Evalutes to 15, because there are 15 different ways you can group together 2 objects from a total of 6 objects
```

##nroot
**nroot** is a function that calculates the specified root of a given number.  
```javascript
//Usage: Math.nroot(number, root);
console.log(Math.nroot(27, 3)); //Returns the 3rd root of 27, which is 3
```

##randomr
**randomr** returns a random number within a specified minimum and maximum range, inclusive of the minimum and maximum. 
```javascript
//Usage: Math.randomr(min, max);
console.log(Math.randomr(50, 100)); //Returns a number between 50-100, inclusive
```
