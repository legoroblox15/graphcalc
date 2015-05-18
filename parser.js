#!/usr/bin/env node

"use strict"

var input = process.argv[2];
/*
 *y=2x -> 2*x
 *y=x^2 -> math.pow(x, 2)*2
 *y=2+x -> 2+x
 *y=-3x^2+2x+5 -> -3*math.pow(x, 2)+2*x+5 
 *
 *Permitted tokens:
 *0, 1, 2, 3, 4, 5, 6, 7, 8, 9, x, ^, -, *, (, ), /, (letter string), ! 
*/
function func2js(input) {
  var new_input = input;
  new_input = new_input.replace(/\s+/g,'');
  new_input = new_input.replace(/^\S+=/,'');
  new_input = new_input.replace(/(\d|\))(\(?)(x|\()/g,'$1*$2$3');
  return new_input;
}
console.log(func2js(input));
