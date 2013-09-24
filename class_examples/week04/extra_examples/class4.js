

var d_canvas = document.getElementById("d");
var context = d_canvas.getContext("2d");


var my_gradient1 = context.createLinearGradient(0, 0, 0, 225);
my_gradient1.addColorStop(0, "black");
my_gradient1.addColorStop(1, "white");
context.fillStyle = my_gradient1;
context.fillRect(0, 0, 300, 225);


// var my_gradient2 = context.createLinearGradient(300, 225, 600, 550);
// my_gradient2.addColorStop(0, "black");
// my_gradient2.addColorStop(1, "w2hite");
// context.fillStyle = my_gradient;
// context.fillRect(300, 225, 600, 550);

context.font = "bold 12px sans-serif";
context.fillText("x", 248, 43);
context.fillText("y", 58, 165);

context.font = "bold 12px sans-serif";
context.fillText("x", 248, 43);
context.fillText("y", 58, 165);