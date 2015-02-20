/**********************************************************************************************************
    Created by: Marcus Parsons
    
   Each function that returns a decimal value and is not a part of the future Math specifications 
   (or is not implemented in the browser being used) has an extra optional argument called prec that is used
   for determining rounding precision for decimal numbers that have many decimals.  

    
    Big credit to the MDN for some of their polyfill functions! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    
**********************************************************************************************************/

var defPrec = 12;

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



//Math.acosh is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the inverse hyperbolic cosine of a given number
Math.acosh = Math.acosh || function (arg, prec) {
    try {
        if (arg < 1) {
            showNotice("Error: acosh only accepts numbers greater than or equal to 1");
            return 0;
        }
        else {
            if (prec) {
                return round(eval(Math.log(arg + Math.sqrt(arg * arg - 1))), prec);
            }
            else {
                return round(eval(Math.log(arg + Math.sqrt(arg * arg - 1))), defPrec);
            }
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }    
}

//Math.asinh is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the inverse hyperbolic sine of a given number
Math.asinh = Math.asinh || function (arg, prec) {
    try {
        if (arg === -Infinity){
            return arg;
        }
        else {
            if (prec) {
                return round(eval(Math.log(arg + Math.sqrt(arg * arg + 1))), prec);
            }
            else {
                return round(eval(Math.log(arg + Math.sqrt(arg * arg + 1))), defPrec);
            }
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }    
}

//Math.atanh is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the inverse hyperbolic tangent of a given number
Math.atanh = Math.atanh || function (arg, prec) {
    try {
        if (arg < -1 || arg > 1){
            showNotice("Error: atanh only accepts numbers between 1 and -1, exclusive.");
            return 0;
        }
        else {
            if (prec) {
                return round(eval(Math.log((1+arg)/(1-arg)) / 2), prec);
            }
            else {
                return round(eval(Math.log((1+arg)/(1-arg)) / 2), defPrec);
            }
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }    
}

//Math.cbrt is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the cube root of a given integer
Math.cbrt = Math.cbrt || function (arg, prec) {
    try {
        if (prec) {
            var y = Math.pow(Math.abs(arg), 1/3);
            y = (arg < 0) ? -y : y;
            return round(y, prec);
        }
        else {
            var y = Math.pow(Math.abs(arg), 1/3);
            y = (arg < 0) ? -y : y;
            return round(y, defPrec);
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }  
}

//Math.clz32 is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the number of leading zeroes of a 32-bit integer.
Math.clz32 = Math.clz32 || function (arg) {
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
        alert("Error: Unable to process expression due to " + err + ".");
    }      
}

//Math.cosh is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the hyperbolic cosine of a number.
Math.cosh = Math.cosh || function (arg, prec) {
    try {
        var y = Math.exp(arg);
  
        if (prec) {
            return round(eval((y + 1 / y) / 2), prec);    
        }
        else {
            return round(eval((y + 1 / y) / 2), defPrec);
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }  
}

//Math.expm1 is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns e^x - 1, where x is argument and e is Euler's constant
Math.expm1 = Math.expm1 || function (arg, prec) {
    try {
        if (prec) {
            return round(eval(Math.exp(arg) - 1), prec); 
        }
        else {
            return round(eval(Math.exp(arg) - 1), defPrec);    
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }      
}

//Math.fround is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser that supports Float32Array prototype
//Returns the nearest single precision float representation of a number.
Math.fround = Math.fround || function (arg) {
    try {
        if (Float32Array) {
            return new Float32Array([arg])[0];
        }
        else {
            alert("fround cannot execute because Float32Array not supported.");
            return 0;
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    } 
}

//Returns the factorial for a given positive integer, including 0
//Not part of the future Math spec
Math.ftor = function (arg) {
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
            alert("Factorials can only be done on positive numbers!");
            return 0;
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }
}


//Math.hypot is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the square root of the sum of squares of its arguments.
Math.hypot = Math.hypot || function () {
    try {
        var y = 0;
        for (var i in arguments) {
            if (arguments[i] === Infinity || arguments[i] === -Infinity) {
                return Infinity;
            }
            y += arguments[i] * arguments[i];
        }
        return round(Math.sqrt(y), defPrec);
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }     
}

//Math.imul is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the result of a 32-bit integer multiplication.
Math.imul = Math.imul || function (a, b) {
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
        alert("Error: Unable to process expression due to " + err + ".");
    }    
    
}

//Math.log10 is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the base 10 logarithm of a given number
Math.log10 = Math.log10 || function (arg, prec) {
    try {
        if (prec) {
            return round(eval(Math.log(arg)/Math.log(10)), prec);
        } 
        else {
            return round(eval(Math.log(arg)/Math.log(10)), defPrec);
        }
    } 
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }
}

//Math.log1p is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the natural logarithm (base e) of 1 + a number
Math.log1p = Math.log1p || function (arg, prec) {
    try {
        if (prec) {
            return round(eval(Math.log(1 + arg)), prec);
        }
        else {
            return round(eval(Math.log(1 + arg)), defPrec);
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }    
}

//Math.log2 is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the logarithm base 2 of a number
Math.log2 = Math.log2 || function (arg, prec) {
    try {
        if (prec) {
            return round(eval(Math.log(arg)/Math.log(2)), prec);
        }
        else {
            return round(eval(Math.log(arg)/Math.log(2)), defPrec);    
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }
}

//Returns the logarithm of a given number using a given base
//Not a part of the future Math spec
Math.logb = function (base, arg, prec) {
    try {
        if (prec) {
            return round(eval(Math.log(arg)/Math.log(base)), prec);
        }
        else {
            return round(eval(Math.log(arg)/Math.log(base)), defPrec);    
        }
    } 
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }
}

//Calculate the average of a set of numbers
//Numbers can be given in a set of arguments or an array
//Not part of the future Math spec
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
        alert("Error: Unable to process expression due to " + err + ".");
    }    
}

//Calculate nth root of a given argument
//Not part of the future Math spec
Math.nthroot = function (arg, root, prec) {
    try {
        root = parseInt(root, 10);
        if (root % 2 === 0 && arg < 0) {
            alert("Even roots require a positive number!");
            return 0;
        } 
        else {
            if (prec) {
                var y = Math.pow(Math.abs(arg), 1/root);
                y = (arg < 0) ? -y : y;
                return round(y, prec);
            }
            else {
                var y = Math.pow(Math.abs(arg), 1/root);
                y = (arg < 0) ? -y : y;
                return round(y, defPrec);
            }
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
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
        alert("Error: Unable to process expression due to " + err + ".");
    }    
}

//Math.sign is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns 1 for a positive number, -1 for a negative number, and 0 for zero.
Math.sign = Math.sign || function (arg) {
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
        alert("Error: Unable to process expression due to " + err + ".");
    }
}

//Math.sinh is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the hyperbolic sine of a number.
Math.sinh = Math.sinh || function (arg, prec) {
    try {
        if (prec) {
            return round(eval((Math.exp(arg) - Math.exp((-arg))) / 2), prec);
        }
        else {
            return round(eval((Math.exp(arg) - Math.exp((-arg))) / 2), defPrec);
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }
}

//Math.tanh is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the hyperbolic tangent of a number.
Math.tanh = Math.tanh || function (arg, prec) {
    try {
        if (arg === Infinity) {
            return 1;
        } 
        else if (arg === -Infinity) {
            return -1;
        } 
        else {
            if (prec) {
                return round(eval((Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg))), prec);
            }
            else {
                return round(eval((Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg))), defPrec);
            }
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }
}

//Math.trunc is an experimental function that isn't available in all browsers yet
//This will allow you to access it from any browser
//Returns the integral part of the number x, removing any fractional digits.
Math.trunc = Math.trunc || function (arg) {
    try {
        if (arg < 0) {
            return Math.ceil(arg);
        }
        else {
            return Math.floor(arg);
        }
    }
    catch (err) {
        alert("Error: Unable to process expression due to " + err + ".");
    }
}
