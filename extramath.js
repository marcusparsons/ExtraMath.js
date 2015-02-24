/**********************************************************************************************************
    Created by: Marcus Parsons
    
    ExtraMath is free for everyone to use, regardless of whether it is for personal or commercial use. 
    I only ask that you give me credit because a lot of work went into this library.
    
   Each function that returns a decimal value and is not a part of the future Math specifications 
   (or is not implemented in the browser being used) has an extra optional argument called prec that is used
   for determining rounding precision for decimal numbers that have many decimals.  

    
    Big credit to the MDN for some of their polyfill functions! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    
**********************************************************************************************************/

var defPrec = 16;

function round (value, precision, mode) {
//  discuss at: http://phpjs.org/functions/round/
// original by: Philip Peterson
//  revised by: Onno Marsman
//  revised by: T.Wild
//  revised by: Rafał Kukawski (http://blog.kukawski.pl/)
//    input by: Greenseed
//    input by: meo
//    input by: William
//    input by: Josep Sanz (http://www.ws3.es/)
// bugfixed by: Brett Zamir (http://brett-zamir.me)
//   edited by: Marcus Parsons
//   example 1: round(1241757, -3);
//   returns 1: 1242000
//   example 2: round(3.6);
//   returns 2: 4
//   example 3: round(2.835, 2);
//   returns 3: 2.84
//   example 4: round(1.1749999999999, 2);
//   returns 4: 1.17
//   example 5: round(58551.799999999996, 2);
//   returns 5: 58551.8

var m, f, isHalf, sgn; // helper variables
precision |= 0; // making sure precision is integer
m = Math.pow(10, precision);
value *= m;
sgn = (value > 0) | -(value < 0); // sign of the number
isHalf = value % 1 === 0.5 * sgn;
f = Math.floor(value);
    if (isHalf) {
        switch (mode) {
            case 'round_up':
                value = f + (sgn > 0); // rounds .5 away from zero
                break;
            case 'round_down':
                value = f + (sgn < 0); // rounds .5 toward zero
                break;
            case 'round_even':
                value = f + (f % 2 * sgn); // rouds .5 towards the next even integer
                break;
            case 'round_odd':
                value = f + !(f % 2); // rounds .5 towards the next odd integer
                break;
            default:
                value = f + (sgn > 0); // rounds .5 away from zero
                break;
    }
}
return (isHalf ? value : Math.round(value)) / m;
} 

//Customize this function how you wish.
//By default, it will show an alert box
function showError (msg) {
    alert(msg);
}

//Math.acosh is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the inverse hyperbolic cosine of a given number
Math.acosh = function (arg) {
    try {
        arg = parseFloat(arg);
        if (arg < 1) {
            showNotice("Error: acosh only accepts numbers greater than or equal to 1");
            return 0;
        }
        else {
                return round(eval(Math.log(arg + Math.sqrt(arg * arg - 1))), defPrec);
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }    
}

//Not a part of the future Math spec
//Returns the area of a given 2D/3D shape.
Math.area = function (shape) {
    try {
        switch (shape) {
            case "circle":
            case "cir":
                try {
                    var r = parseFloat(arguments[1]);
                    if (arguments[2] === "exact") {
                        return round(eval(Math.pow(r, 2)), defPrec) + "&pi;";
                    }
                    else {
                        return round(eval(Math.PI * Math.pow(r, 2)), defPrec);
                    }
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                   
                break; 
            case "cone":
            case "con":
                try {
                    var r = parseFloat(arguments[1]);
                    var h = parseFloat(arguments[2]);
                    return round(eval((Math.PI * r) * (r + Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2)))), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                 
                break;
            case "cube":
            case "cub":
                try {
                    var side = parseFloat(arguments[1]);
                    return round(eval(6 * Math.pow(side, 2)), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                 
                break;
            case "cylinder":
            case "cyl":
                try {
                    var r = parseFloat(arguments[1]);
                    var h = parseFloat(arguments[2]);
                    return round(eval((2 * Math.PI * r) * (h + r)), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                    
                break;
            case "cylside":
            case "cys":
                try {
                    
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                 
                break;
            case "ellipse":
            case "ell":
                try {
                    var a = parseFloat(arguments[1]);
                    var b = parseFloat(arguments[2]);
                    if (arguments[3] === "exact") {
                        return round(eval(a * b), defPrec) + "&pi;";
                    }
                    else {
                        return round(eval(Math.PI * a * b), defPrec);
                    }
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                       
                break;
            case "npolygon":
            case "npo":
                try {
                    var n = parseFloat(arguments[1]);
                    var side = parseFloat(arguments[2]);
                    return round(eval(0.25 * n * Math.pow(side, 2) * (1/Math.tan(Math.PI/n))), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                       
                break;                
            case "parallelogram":
            case "par":
                try {
                    var a = parseFloat(arguments[1]);
                    var b = parseFloat(arguments[2]);
                    return round(eval(a * b), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }   
                break; 
            case "rectangle":
            case "rec":
                try {
                    var a = parseFloat(arguments[1]);
                    var b = parseFloat(arguments[2]);
                    return round(eval(a * b), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                
                break;  
            case "sector":
            case "sec":
                try {
                    var r = parseFloat(arguments[1]);
                    var angle = parseFloat(arguments[2]);
                    return round(eval(0.5 * Math.pow(r, 2) * angle), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                   
                break;
            case "segment":
            case "seg":
                try {
                    var r = parseFloat(arguments[1]);
                    var angle = parseFloat(arguments[2]);
                    return round(eval(0.5 * (angle - Math.sin(angle)) * Math.pow(r, 2)), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                   
                break;
            case "square":
            case "squ":
                try {
                    var a = parseFloat(arguments[1]);
                    return round(eval(Math.pow(a, 2)), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                   
                break;
            case "sphere":
            case "sph":
                try {
                    var r = parseFloat(arguments[1]);
                    return round(eval(4 * Math.PI * Math.pow(r, 2)), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                 
                break;
            case "torus":
            case "tor":
                try {
                    var lilr = parseFloat(arguments[1]);
                    var bigr = parseFloat(arguments[2]);
                    return round(eval(4 * Math.pow(Math.PI, 2) * lilr * bigr), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                 
                break;
            case "trapezoid":
            case "tra":
                try {
                    var a = parseFloat(arguments[1]);
                    var b = parseFloat(arguments[2]);
                    var h = parseFloat(arguments[3]);
                    return round(eval((0.5 * (a + b)) * h), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                
                break;                
            case "triangle":
            case "tri":
                try {
                    var b = parseFloat(arguments[1]);
                    var h = parseFloat(arguments[2]);
                    return round(eval(0.5 * b * h), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }
                break;
            default: 
                showError("You must choose a shape in order to calculate its area. You may enter the full name of the shape or the first three letters.");
                break;
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }    
}

//Math.asinh is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the inverse hyperbolic sine of a given number
Math.asinh = function (arg) {
    try {
        arg = parseFloat(arg);
        if (arg === -Infinity){
            return arg;
        }
        else {
            return round(eval(Math.log(arg + Math.sqrt(arg * arg + 1))), defPrec);
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }    
}

//Math.atanh is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the inverse hyperbolic tangent of a given number
Math.atanh = function (arg) {
    try {
        arg = parseFloat(arg);
        if (arg < -1 || arg > 1){
            showNotice("Error: atanh only accepts numbers between 1 and -1, exclusive.");
            return 0;
        }
        else {
            return round(eval(Math.log((1+arg)/(1-arg)) / 2), defPrec);
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }    
}

//Math.cbrt is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the cube root of a given integer
Math.cbrt = function (arg) {
    try {
        arg = parseFloat(arg);
        var y = Math.pow(Math.abs(arg), 1/3);
        y = (arg < 0) ? -y : y;
        return round(y, defPrec);
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }  
}

//Math.clz32 is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the number of leading zeroes of a 32-bit integer.
Math.clz32 = function (arg) {
    try {
        var value = Number(arg) >>> 0;
        if (value) {
            return 32 - value.toString(2).length;
        }
        else {
            return 32;
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }      
}

//Math.cosh is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the hyperbolic cosine of a number.
Math.cosh = function (arg) {
    try {
        arg = parseFloat(arg);
        var y = Math.exp(arg);
        return round(eval((y + 1 / y) / 2), defPrec);
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }  
}

//Math.expm1 is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns e^x - 1, where x is argument and e is Euler's constant
Math.expm1 = function (arg) {
    try {
        arg = parseFloat(arg);
        return round(eval(Math.exp(arg) - 1), defPrec);    
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }      
}

//Math.fround is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods that supports Float32Array prototype
//Returns the nearest single precision float representation of a number.
Math.fround = function (arg) {
    try {
        if (Float32Array) {
            return new Float32Array([arg])[0];
        }
        else {
            showError("fround cannot execute because Float32Array not supported.");
            return 0;
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    } 
}

//Not part of the future Math spec
//Returns the factorial for a given positive integer, including 0
Math.fact = function (arg) {
    try {
        arg = parseInt(arg, 10);
        if (arg > 0) {
            var args = [];
            for (var i = 0; i < arg; i++){
                args.push((i+1) + "*");
            }
            args[args.length-1] = args.length;
            args = args.toString();
            do {
                args = args.replace(",","");
            } while (args.indexOf(",") > -1)

            return round(eval(args), 64);
        }
        else if (arg === 0) {
            return "1";
        }
        else {
            showError("Factorials can only be done on positive numbers!");
            return 0;
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }
}


//Math.hypot is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the square root of the sum of squares of its arguments.
Math.hypot = function () {
    try {
        var y = 0;
        for (var i in arguments) {
            if (arguments[i] === Infinity || arguments[i] === -Infinity) {
                return Infinity;
            }
            arguments[i] = parseFloat(arguments[i]);
            y +=  arguments[i] * arguments[i];
        }
        return round(Math.sqrt(y), defPrec);
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }     
}

//Math.imul is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the result of a 32-bit integer multiplication.
Math.imul = function (a, b) {
    try {
        var ah = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }    
}

//Not part of the future Math spec
//Returns the leading integer portion of a division of a set of two or more numbers
Math.intdiv = function () {
    try {
        if (typeof arguments[0] === "string" || typeof arguments[0] === "number") {
            var total = "";
            for (var i in arguments) {
                total += parseFloat(arguments[i]).toString() + "/";
            }
            total = total.substr(0, total.length - 1);
            return Math.floor(eval(total));
        }
        else {
            arguments[0] = arguments[0].toString();
            do {
                arguments[0] = arguments[0].replace(",","/");
            } while (arguments[0].indexOf(",") > -1)
                return Math.floor(eval(arguments[0]));
        }        
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }      
}

//Not part of the future Math spec
//Returns an object that contains the slope, y-intercept, and line equation of a given set of points
Math.line = function () {
    try {
        var newline = {};
        if (typeof arguments[0] === "string" || typeof arguments[0] === "number") {
            arguments[0] = parseFloat(arguments[0]);
            arguments[1] = parseFloat(arguments[1]);
            arguments[2] = parseFloat(arguments[2]);
            arguments[3] = parseFloat(arguments[3]);
            newline.slope = (arguments[3] - arguments[1])/(arguments[2] - arguments[0]);
            newline.yint = arguments[1] - round((newline.slope * arguments[0]), defPrec);
            var yint = (newline.yint > 0) ? " + " + newline.yint : " - " + (-newline.yint);
            newline.equation = "y = " + newline.slope + "x" + yint;
            return newline;
        }
        else {
            if (arguments[0].length > 4) {
                showError("You may only use two sets of points with the line function!");
                return 0;
            }
            else {
                var args = [];
                var i = 0;
                var newline = {};
                do {
                    args[i] = parseFloat(arguments[0].shift());
                    i++;
                } while (arguments[0].length > 0)
                newline.slope = (args[3] - args[1])/(args[2] - args[0]);
                newline.yint = args[1] - round((newline.slope * args[0]), defPrec);
                var yint = (newline.yint > 0) ? " + " + newline.yint : " - " + (-newline.yint);
                newline.equation = "y = " + newline.slope + "x" + yint;
                return newline;                
            }
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }          
}

//Math.log10 is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the base 10 logarithm of a given number
Math.log10 = function (arg) {
    try {
        arg = parseFloat(arg);
        return round(eval(Math.log(arg)/Math.log(10)), defPrec);        
    } 
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }
}

//Math.log1p is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the natural logarithm (base e) of 1 + a number
Math.log1p = function (arg) {
    try {
        arg = parseFloat(arg);
        return round(eval(Math.log(1 + arg)), defPrec);
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }    
}

//Math.log2 is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the logarithm base 2 of a number
Math.log2 = function (arg) {
    try {
        arg = parseFloat(arg);
        return round(eval(Math.log(arg)/Math.log(2)), defPrec);    
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }
}

//Not part of the future Math spec
//Returns the logarithm of a given number using a given base
Math.logb = function (base, arg) {
    try {
        base = parseFloat(base);
        arg = parseFloat(arg);
        return round(eval(Math.log(arg)/Math.log(base)), defPrec);    
    } 
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }
}

//Not part of the future Math spec
//Calculate the average of a set of numbers
//Numbers can be given in a set of arguments or an array
Math.mean = function () {
    var total = 0;
    try {
        if (typeof arguments[0] === "string" || typeof arguments[0] === "number") {
            for (var i in arguments) {
                total += parseInt(arguments[i], 10);
            }
            return round(total / arguments.length, defPrec);
        }
        else {
            var len = arguments[0].length;
            arguments[0] = arguments[0].toString();
            do {
                arguments[0] = arguments[0].replace(",","+");
            } while (arguments[0].indexOf(",") > -1)
                arguments[0] = eval(arguments[0]);
                return round(eval(arguments[0] / len), defPrec);
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }    
}

//Not part of the future Math spec
//Returns the number of ways to choose k different objects from a set of n objects
Math.nck = function (n, k)  {
    try {
            n = parseInt(n, 10);
            k = parseInt(k, 10);
            if (n > 0 && k > 0) {
            return round(eval(Math.fact(n)/(Math.fact(n-k) * Math.fact(k))), defPrec);
        }
        else {
            showError("When using nck, n and k must both be greater than zero!");
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }     
}

//Calculate nth root of a given argument
//Not part of the future Math spec
Math.nroot = function (arg, root) {
    try {
        arg = parseFloat(arg);
        root = parseInt(root, 10);
        if (root % 2 === 0 && arg < 0) {
            showError("Even roots require a positive number!");
            return 0;
        } 
        else {
            var y = Math.pow(Math.abs(arg), 1/root);
            y = (arg < 0) ? -y : y;
            return round(y, defPrec);
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }  
}

//Not part of the future Math spec
//Returns the perimeter of a given shape.
Math.perimeter = function (shape) {
    try {
        switch (shape) {
            case "circle":
            case "cir":
                try {
                    var r = parseFloat(arguments[1]);
                    return round(eval(2 * Math.PI * r), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }
                break;
            case "ellipse":
            case "ell":
                try {
                    //P = Math.PI * (a + b) * (1 + ((3 * h) / (10 + Math.sqrt(4 - 3 * h)))
                    var a = parseFloat(arguments[1]);
                    var b = parseFloat(arguments[2]);
                    var h = Math.pow((a - b), 2) / Math.pow((a + b), 2);
                    return round(eval(Math.PI * (a + b) * (1 + ((3 * h) / (10 + Math.sqrt(4 - 3 * h))))), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }  
                break;
            case "quadrilateral":
            case "qua":
                try {
                    var a = parseFloat(arguments[1]);
                    var b = parseFloat(arguments[2]);
                    var c = parseFloat(arguments[3]);
                    var d = parseFloat(arguments[4]);
                    return round(eval(a + b + c + d), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                  
                break;
            case "rectangle":
            case "rec":
                try {
                    var w = parseFloat(arguments[1]);
                    var h = parseFloat(arguments[2]);   
                    return round(eval(2 * (w + h)), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                  
                break;
            case "sector":
            case "sec":
                try {
                    var r = parseFloat(arguments[1]);
                    var angle = parseFloat(arguments[2]);
                    return round(eval(r * (angle + 2)), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                  
                break;
            case "square":
            case "squ":
                try {
                    var a = parseFloat(arguments[1]);                
                    return round(eval(a * 4), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                  
                break;     
            case "triangle":
            case "tri":
                try {
                    var a = parseFloat(arguments[1]);
                    var b = parseFloat(arguments[2]);
                    var c = parseFloat(arguments[3]);
                    return round(eval(a + b + c), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                  
                break;                
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    } 
}

//randomrange returns a value that is in between a given range inclusive
//In interval notation: [min, max]
//Not part of the future Math spec
Math.randomr = function (min, max) {
    try {
        min = parseInt(min, 10);
        max = parseInt(max, 10);
        return eval(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }    
}

//Math.sign is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns 1 for a positive number, -1 for a negative number, and 0 for zero.
Math.sign = function (arg) {
    try {
        if (arg > 0) {
            return 1;
        }
        else if (arg < 0) {
            return -1;
        }
        else {
            return 0;
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }
}

//Math.sinh is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the hyperbolic sine of a number.
Math.sinh = function (arg) {
    try {
        arg = parseFloat(arg);
        return round(eval((Math.exp(arg) - Math.exp((-arg))) / 2), defPrec);
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }
}

//Math.tanh is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the hyperbolic tangent of a number.
Math.tanh = function (arg) {
    try {
        
        if (arg === Infinity) {
            return 1;
        } 
        else if (arg === -Infinity) {
            return -1;
        } 
        else {
            arg = parseFloat(arg);
            return round(eval((Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg))), defPrec);   
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }
}


//Math.trunc is an experimental function that isn't available in all browsers yet
//This will you allow to access it from any browser that supports standard Math properties/methods
//Returns the integral part of the number x, removing any fractional digits.
Math.trunc = function (arg) {
    try {
        arg = parseFloat(arg);
        if (arg < 0) {
            return Math.ceil(arg);
        }
        else {
            return Math.floor(arg);
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }
}

//Not part of the future Math spec
//Returns the volume of a given 3D shape.
Math.volume = function (shape) {
    try {
        switch (shape) {
            case "cone":
            case "con":
                try {
                    var r = parseFloat(arguments[1]);
                    var h = parseFloat(arguments[2]);
                    return round(eval((1/3) * Math.PI * Math.pow(r, 2) * h), defPrec)
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                
                break;
            case "cube":
            case "cub":
                try {
                    var side = parseFloat(arguments[1]);
                    return round(eval(Math.pow(side, 3)), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }                  
                break;
            case "cylinder":
            case "cyl":
                try {
                    var r = parseFloat(arguments[1]);
                    var h = parseFloat(arguments[2]);
                    return round(eval(Math.PI * Math.pow(r, 2) * h), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }
                break;
            case "ellipsoid":
            case "ell":
                try {
                    var r1 = parseFloat(arguments[1]);
                    var r2 = parseFloat(arguments[2]);
                    var r3 = parseFloat(arguments[3]);
                    return round(eval((4/3) * Math.PI * r1 * r2 * r3), defPrec);                
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }  
                break;
            case "irregularprism":
            case "irr":
                try {
                    var b = parseFloat(arguments[1]);
                    var h = parseFloat(arguments[2]);
                    return round(eval(b * h), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }  
                break;
            case "pyramid":
            case "pyr":
                try {
                    var l = parseFloat(arguments[1]);
                    var w = parseFloat(arguments[2]);
                    var h = parseFloat(arguments[3]);
                    return round(eval((l * w * h)/3), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }  
                break;
            case "rectangularprism":
            case "rec":
                try {
                    var l = parseFloat(arguments[1]);
                    var w = parseFloat(arguments[2]);
                    var h = parseFloat(arguments[3]);
                    return round(eval(l * w * h), defPrec);                    
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }  
                break;
            case "sphere":
            case "sph":
                try {
                    var r = parseFloat(arguments[1]);
                    return round(eval((4/3) * Math.PI * Math.pow(r, 3)), defPrec);
                }
                catch (err) {
                    showError("Error: Unable to process expression due to " + err + ".");
                }  
                break;
        }
    }
    catch (err) {
        showError("Error: Unable to process expression due to " + err + ".");
    }    
}
