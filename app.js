var canvas =  document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

// water

context.beginPath();
// context.moveTo(0,300);
// context.lineTo(400,300);
context.rect(0,300, 400, 300);

var lGradient =  context.createLinearGradient(0,0,400,0);
// x position to start the gradient, y position to start the gradient, x position to end the gradient, y position to end the gradient.
lGradient.addColorStop(0, "#0000FF");
lGradient.addColorStop(1, "#5f9ad1");
// starting of the color, color value, AND AS MANY COLORS AS WE WANT. 
context.fillStyle = lGradient;
context.strokeStyle = "blue";
context.fill();
context.stroke();


// A triangle

context.beginPath();
context.moveTo(155, 150);
context.lineTo(220, 270);
context.lineTo(90, 270);
context.lineTo(155, 150);

context.fillStyle = "white";
context.strokeStyle = "white";
context.fill();
context.stroke();

// another triangle

context.beginPath();
context.moveTo(145, 110);
context.lineTo(145, 140);
context.lineTo(110,125);
context.closePath();
context.fillStyle = "#15960A";
context.strokeStyle = "#15960A";
context.fill();
context.stroke();

// da rectangle
context.beginPath();
context.rect(70, 280, 170, 40);
context.fillStyle = "rgba(165, 42, 42, 0.7)";
context.strokeStyle = "rgba(165, 42, 42, 0.7)";
context.fill();
context.stroke();


// context.rect(starting point pixels from left, starting point pixels from top, width of the rectangle, height of the rectangle)


// danother rectangle
context.beginPath();
context.rect(150,100,10,180);
context.fillStyle = "black";
context.strokeStyle = "black";
context.fill();
context.stroke();


// Arc method, to draw a partial or full circle.

context.beginPath();
context.arc(330,70,45,0,2*Math.PI,true);

var gGradient = context.createRadialGradient(330, 70, 10, 330, 70 , 45);
// x position of the interior of the circle
// y position of the interior of the circle
// radius of the interior color
// Exterior color same thing // y position of the interior of the circle
// radius of the interior color

gGradient.addColorStop(0, "#ff8c00");
gGradient.addColorStop(1, "#ffff00");

context.fillStyle = gGradient;
context.strokeStyle = "yellow";
// radial gradient, used for circles
context.fill();
context.stroke();


// context.arc(number of pixels from the left of the canvas,
// number of pizles from the top,
// radius of the circle,
// starting point of the circle,
// ending point of the circle, 
// direction(clockwise[true], or counter clockwise[false]))

// fill, is the color within the shape
// stroke, color the outside of the shape or border

// fill.style , stroke.style

// linear gradient, and radial gradient. 