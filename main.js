canvas=document.getElementById("my_canvas");
colour="red"
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="grey"
ctx.LineWidth="4"
ctx.rect(150, 143, 430, 200);
ctx.stroke();
console.log();

ctx.beginPath();
ctx.strokeStyle="blue"
ctx.LineWidth="5"
ctx.arc(250, 210, 40, 0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black"
ctx.LineWidth="5"
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
