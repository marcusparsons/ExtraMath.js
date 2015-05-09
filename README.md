# ExtraMath.js
Normalizes access of experimental JavaScript Math methods that are being introduced in the upcoming ECMAScript 6 release across all browsers that support the current Math methods, adds several new Math functions, and does not require any dependencies.

##About ExtraMath.js
ExtraMath.js introduces 11 new functions to the JavaScript Math prototype: **area**, **fact**, **intdiv**, **line**, **logb**, **mean**, **nck**, **nroot**, **perimeter**, **randomr**, and **volume**.  No experimental Math methods are overwritten by this library.  Each experimental math method utilizes a polyfill function that will use the Math function if it is available, and if not, uses the function included in ExtraMath.js.

There is a variable set in the beginning called `defPrec` which is used to set the maximum amount of decimal points for each answer that can return a decimal value i.e. if `decPrec = 12`, a fraction such as 1/3 would be deprecated to 0.333333333333 with 12 points of precision while a fraction such as 1/2 would still be only 0.5.  This `defPrec` variable is used in conjunction with the `round` function near the top of the page.  This `round` function is **not** to be confused with the `Math.round` function.  For more information about the round function, visit the [PHPJS.org link here.](http://phpjs.org/functions/round/)  

You can check out the Mozilla Developer Network for all of the experimental Math functions that were added to ExtraMath.js.  All experimental functions will work on all browsers that at least support the current static Math functions.  Experimental functions are designated with a beaker next to their name.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

##How To Use
In order to use ExtraMath, all you need to do is call the "extramath.min.js" script (or "extramath.js") before you call the script for your program i.e.
```html
<script type="text/javascript" src="extramath.min.js"></script>
<script type="text/javascript">
//My code here
</script>
```

##Error Checking
Each function has error handling built-in that calls the function `showError`.  Experimental functions, from the ECMAScript 6 spec, only access `showError` if the function is not currently available in the browser.   This way if you want to customize how errors are displayed, you only need to do so at one location, instead of having to search throughout the document to change each and every display function.

##Extra Functions Added

The following methods are the methods that are not a part of the future JavaScript Math specification (but maybe should be) that were added to **ExtraMath.js**:

##area
**area** calculates the area of a number of 2D/3D shapes.  The arguments required vary depending on the shape except for the first argument which is always a string containing the name of the shape.  The name of the shape can be either the full name of the shape or just the first 3 letters.  The area function can accept strings, numbers, or arrays for its arguments except for the **shape** argument, which must be a string.
```javascript
//Usage: Math.area(shape, [otherArgs);
```

####circle
```javascript
/*
Usage: Math.area('cir', radius, ['exact');
OR: Math.area('circle', radius, ['exact');
'exact' is an optional argument that returns a string containing the exact value of the expression
Note that using the 'exact' argument will NOT return a valid argument that can be used in further mathematical expressions.
*/
console.log(Math.area('cir', 3)); //Evaluates to 28.27433...
```
`console.log(Math.area('cir', 3, 'exact');` Evalutes to 9&pi;

####cone (surface)
Evaluates the entire surface area of a given cone
```javascript
/*
Usage: Math.area('con', radius, height); where radius is the cone's radius and height is the height from the base of the cone to the apex
OR: Math.area('cone', radius, height);
*/
console.log(Math.area('con', 3, 4)); //Evaluates to 75.39822..
```

####cube (surface)
Evaluates the entire surface area of a given cube
```javascript
/*
Usage: Math.area('cub', side); where side is the measure of any side on the cube
OR: Math.area('cube', side);
*/
console.log(Math.area('cub', 3)); //Evaluates to 54
```

####cylinder (surface)
Evaluates the entire surface area of a given cylinder
```javascript
/*
Usage: Math.area('cyl', radius, height); where radius is the radius of the cylinder and height is its vertical height
OR: Math.area('cylinder', radius, height);
*/
console.log(Math.area('cyl', 3, 4)); //Evaluates to 131.94689...
```

####ellipse
```javascript
/*
Usage: Math.area('ell', a, b, ['exact'); where a is either minor/major axis and b is the other axis, interchangeable
OR: Math.area('ellipse', a, b, ['exact');
'exact' is an optional argument that returns a string containing the exact value of the expression.
Note that using the 'exact' argument will NOT return a valid argument that can be used in further mathematical expressions.
*/
console.log(Math.area('ell', 3, 2)); //Evaluates to 18.84955...
```
`console.log(Math.area('ell', 3, 2, 'exact');` Evalutes to 6&pi;

####n-polygon
Evaluates the area of any regular n-sided polygon (all sides are equal).
```javascript
/*
Usage: Math.area('npo', n, side); where n is the number of sides and side is a measure of any side of the polygon
OR: Math.area('npolygon', n, side);
*/
console.log(area('npo', 50, 2)); //Evaluates to 794.72724...
```

####parallelogram
```javascript
/*
Usage: Math.area('par', b, h); where b is the base and the h is the height, interchangeable 
OR: Math.area('parallelogram', b, h);
*/
console.log(Math.area('par', 4, 2)); //Evaluates to 8
```

####rectangle
```javascript
//Usage: Math.area('rec', a, b); where a is one side and b is the other side, interchangeable
//OR: Math.area('rectangle', a, b);
console.log(Math.area('rec', 6, 3)); //Evaluates to 18
```

####sector
```javascript
/*
Usage: Math.area('sec', r, angle); where r is the radius and angle is the angle in radians, not interchangeable
OR: Math.area('sector', r, angle);
*/
console.log(Math.area('sec', 3, Math.PI/3)); //Evaluates to 4.71238...
```

####segment
```javascript
/*
Returns the area of a segment of an elliptical shape
Usage: Math.area('seg', r, angle); where r is the radius and angle is the angle in radians, not interchangeable
OR: Math.area('segment', r, angle);
*/
console.log(Math.area('seg', 3, Math.PI/3)); //Evaluates to 0.81527...
```

####square
```javascript
/*
Usage: Math.area('squ', a); where a is the measure of any side of the square
OR: Math.area('square', a); 
*/
console.log(Math.area('squ', 5)); //Evaluates to 25
```

####sphere (surface)
Evaluates the surface area of a given sphere.
```javascript
/*
Usage: Math.area('sph', radius); where radius is the radius of the sphere
OR: Math.area('sphere', radius);
*/
console.log(Math.area('sph', 4)); //Evaluates to 201.06192...
```

####torus (surface)
Evaluates the surface area of a given torus.
```javascript
/*
Usage: Math.area('tor', r, R);
OR: Math.area('torus', r, R); //r and R are interchangeable
r represents the distance from the outermost edge of the torus to the center line of the solid part of the torus.
R represents the distance from the center line of the solid part of the torus to the center of the hole in the torus.
*/
console.log(Math.area('tor', 3, 5)); //Evaluates to 592.17626...
```

####trapezoid
```javascript
/*
Usage: Math.area('tra', a, b, h); where a is the measure of the top base, b is the measure of the bottom base, and h is the vertical height
OR: Math.area('trapezoid', a, b, h);
a and b are interchangeable, but h must remain in the 4th argument slot
*/
console.log(Math.area('tra', 5, 2, 3)); //Evaluates to 10.5
```

####triangle
```javascript
/*
Usage: Math.area('tri', b, h); where b is the base and h is the vertical height, interchangeable
OR: Math.area('triangle', b, h);
*/
console.log(Math.area('tri', 5, 2)); //Evaluates to 5
```

***

##cot
Returns the cotangent of an angle given in radians
```javascript
//Usage: Math.cot(angle);
console.log(Math.cot(Math.PI/4)); //Evaluates to 1
```

***

##csc
Returns the cosecant of an angle given in radians
```javascript
//Usage: Math.csc(angle);
console.log(Math.csc(Math.PI/2)); //Evaluates to 1
```

***

##fact
**fact** is short for **factorial** and will evaluate a given number to its factorial i.e.
```javascript
//Usage: Math.fact(arg);
console.log(Math.fact(7)); //Evaluates to 5040, 7*6*5*4*3*2*1
```

***

##intdiv
**intdiv** is short for **Integer Division**.  This function will divide a series of numbers and return the integer portion of the quotient.  **intdiv** can take a virtually unlimited number of arguments.
```javascript
//Usage: Math.intdiv(n, n1, n2, ...);
//OR: Math.intdiv(arrayVar);
console.log(Math.intdiv(10, 3, 2)); //Evalutes to 1, which is the integer portion of 10 divided by 3 divided by 2
console.log(Math.intdiv([10, 3, 2])); //Evalutes to 1, which is the integer portion of 10 divided by 3 divided by 2
console.log(Math.intdiv(['10', '3', '2'])); //Evalutes to 1, which is the integer portion of 10 divided by 3 divided by 2
```

***

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

***

##logb
**logb** is a logarithm function that allows you to specify a base and number, instead of having to construct this logarithm yourself.
```javascript
//Usage: Math.logb(number, base);
console.log(Math.logb(8, 8));//Evalutes the base 8 logarithm of 8 which is 1
```

***

##mean
**mean** is a function that calculates the average of a series of numbers. This function can take a virtually unlimited number of arguments.  Arguments can be passed in as comma separated strings or numbers or as an array. 
```javascript
//Usage: Math.mean(n, n1, n2, ...);
//Or Math.mean(arrayVar);
console.log(Math.mean(5,1)); //Evalutes to 3
console.log(Math.mean([5,1])); //Evaluates to 3
console.log(Math.mean(['5','1'])); //Evaluates to 3
```

***

##nck
**nck** is short **n Choose k** which is used to evaluate the number of ways that *k* amount of grouped objects can be chosen from a number of *n* objects.  For more information, try visiting [this MathIsFun article about combinations and permutations.](http://www.mathsisfun.com/combinatorics/combinations-permutations.html)
```javascript
//Usage: Math.nck(n, k); where n is the number of objects and k is the amount of objects to group together
console.log(Math.nck(6, 2)); //Evalutes to 15, because there are 15 different ways you can group together 2 objects from a total of 6 objects
```

***

##nroot
**nroot** is a function that calculates the specified root of a given number.  
```javascript
//Usage: Math.nroot(number, root);
console.log(Math.nroot(27, 3)); //Returns the 3rd root of 27, which is 3
```

***

##perimeter
**perimeter** calculates the perimeter of a given shape. The arguments required vary depending on the shape except for the first argument which is always a string containing the name of the shape.  The name of the shape can be either the full name of the shape or just the first 3 letters.  The perimeter function can accept strings, numbers, or arrays for its arguments except for the **shape** argument, which must be a string.


####circle
```javascript
/*
Usage: Math.perimeter('cir', r); r is the radius
OR: Math.perimeter('circle', r);
*/
console.log(Math.perimeter('cir', 2)); //Evaluates to 12.56637...
```

####ellipse
Uses the Indian mathematician Ramanujan's 3rd approximation equation to evaluate the perimeter, which is one of the most accurate approximations of the perimeter of an ellipse.
```javascript
/*
Usage: Math.perimeter('ell', a, b); a is the length of the minor axis and b is the length of the major axis
OR: Math.perimeter('ellipse', a, b);
*/
console.log(Math.perimeter('ell', 3, 4)); //Evaluates 22.10349...
```

####quadrilateral
```javascript
/*
Usage: Math.perimeter('qua', a, b, c, d); a, b, c, and d are lengths of each side of the quadrilateral
OR: Math.perimeter('quadrilateral', a, b, c, d);
a, b, c, and d are interchangeable
*/
console.log(Math.perimeter('qua', 2, 3, 5, 7)); //Evaluates to 17
```

####rectangle
```javascript
/*
Usage: Math.perimeter('rec', w, h); w is width and h is height
OR: Math.perimeter('rectangle', w, h);
*/
console.log(Math.perimeter('rec', 2, 4)); //Evaluates to 12
```

####sector
```javascript
/*
Usage: Math.perimeter('sec', r, angle); r is the radius of the sector and angle is in radians
OR: Math.perimeter('sector', r, angle);
*/
console.log(Math.perimeter('sec', 3, Math.PI/3)); //Evaluates to 9.14159...
```

####square
```javascript
/*
Usage: Math.perimeter('squ', side); side is the measure of one of its sides
OR: Math.perimeter('square', side);
*/
console.log(Math.perimeter('squ', 3)); //Evaluates to 12
```

####triangle
```javascript
/*
Usage: Math.perimeter('tri', a, b, c); a, b, and c are measures of each side and are interchangeable
OR: Math.perimeter('triangle', a, b, c);
*/
console.log(Math.perimeter('tri', 3, 5, 6)); //Evaluates to 14
```

***

##randomr
**randomr** returns a random number within a specified minimum and maximum range, inclusive of the minimum and maximum. 
```javascript
//Usage: Math.randomr(min, max);
console.log(Math.randomr(50, 100)); //Returns a number between 50-100, inclusive
```

***

##sec
Returns the secant of an angle given in radians
```javascript
//Usage: Math.sec(angle);
console.log(Math.sec(Math.PI)); //Evaluates to -1
```

***

##volume
**volume** calculates the volume of a given 3D shape. The arguments required vary depending on the shape except for the first argument which is always a string containing the name of the shape.  The name of the shape can be either the full name of the shape or just the first 3 letters.  The volume function can accept strings, numbers, or arrays for its arguments except for the **shape** argument, which must be a string.
```javascript
//Usage: Math.volume(shape, [otherArgs);
```

####cone
```javascript
/*
Usage: Math.volume('con', r, h); where r is the radius of the cone and h is the vertical height to its apex
OR: Math.volume('cone', r, h);
*/
console.log(Math.volume('con', 3, 5)); //Evaluates to 47.12388...
```

####cube
```javascript
/*
Usage: Math.volume('cub', side); where side is the measure of any side of the cube
OR: Math.volume('cube', side);
*/
console.log(Math.volume('cub', 3)); //Evaluates to 27
```

####cylinder
```javascript
/*
Usage: Math.volume('cyl', r, h); where r is the radius of the cylinder and h is its vertical height
OR: Math.volume('cylinder', r, h);
*/
console.log(Math.volume('cyl', 1, 4)); //Evaluates to 12.56637...
```

###ellipsoid
```javascript
/*
Usage: Math.volume('ell', r1, r2, r3); all of the radiuses in the ellipsoid are interchangeable
OR: Math.volume('ellipsoid', r1, r2, r3);
*/
console.log(Math.volume('ell', 1, 3, 5)); //Evaluates to 62.83185...
```

####irregularprism
```javascript
/*
Used for objects that do not have a classified shape
Usage: Math.volume('irr', A, h); where A is the area of the base of the prism and h is its height
OR: Math.volume('irregularprism', A, h);
*/
console.log(Math.volume('irr', 3, 7)); //Evaluates to 21
```

####pyramid
```javascript
/*
Usage: Math.volume('pyr', l, w, h); l is length, w is width, and h is height
OR: Math.volume('pyramid', l, w, h);
*/
console.log(Math.volume('pyr', 3, 2, 4)); //Evaluates to 8
```

####rectangularprism
```javascript
/*
Usage: Math.volume('rec', l, w, h); l is length, w is width, and h is height
OR: Math.volume('rectangularprism', l, w, h);
*/
console.log(Math.volume('rec', 2, 5, 6)); //Evaluates to 60
```

####sphere
```javascript
/*
Usage: Math.volume('sph', r); r is the radius 
OR: Math.volume('sphere', r);
*/
console.log(Math.volume('sph', 3)); //Evaluates to 113.09733...
```

***

##License
ExtraMath.js is licensed under the [GNU GPL v3 license](http://www.gnu.org/licenses/gpl.txt) which means that it is **open source** and free to distribute and use for personal or commercial usage! :)

***

##Copyright
Copyright 2015, [Marcus Parsons](http://www.marcusparsons.com) 
