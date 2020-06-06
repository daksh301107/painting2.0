var drawing=[];
var currentPath=[];
var database;
function setup() {
  canvas=createCanvas(1000, 500);
  database=firebase.database();
  canvas.mousePressed(startPath);
  //canvas.mousereleased(endPath);
}
function startPath(){
    currentPath=[];
    drawing.push(currentPath);    
    database.ref('/').set({
      "drawing":drawing

    })
}
//function endPath(){
  //  drawing.push(currentpath);
//}
function draw() {
    background(0);
      
    if (mouseIsPressed){
        
        var point={
            x:mouseX,
            y:mouseY
        }
        currentPath.push(point);
        }


stroke(255);
strokeWeight(4);
noFill();

for (var i=0;i<drawing.length;i++){
  beginShape();
    var path=drawing[i];

    for(var j=0;j<path.length;j++){
     vertex(path[j].x,path[j].y)
}   

endShape();   
}
}