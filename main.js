var mouseevent="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mouseDown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
   currentx=e.clientX-canvas.offsetLeft;
   currenty=e.clientY-canvas.offsetTop;
if(mouseevent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=5;
 
    ctx.arc(currentx,currenty,50,0,2*Math.PI);
    ctx.stroke();
}    
lastx=currentx;
lasty=currenty;
}
