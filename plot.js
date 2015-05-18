var line = [];
var input = ""
/*
 *y=2x -> 2*x
 *y=x^2 -> math.pow(x, 2)*2
 *y=2+x -> 2+x
 *y=-3x^2+2x+5 -> -3*math.pow(x, 2)+2*x+5 
 *
 *Permitted tokens:
 *0, 1, 2, 3, 4, 5, 6, 7, 8, 9, x, ^, -, *, (, ), /, (letter string), ! 
 */
function plot(new_input):
{
  for (var x= -10; x <= 10; x++) {
    var y = eval(new_input);
    console.log('x: ' + x + ' y: ' + y);
    var points = [x,y];
    line.push(points);
  }}
