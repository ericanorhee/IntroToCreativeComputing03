var part = 15;
var blueColor = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  randomSeed(5);
  colorMode(RGB, part, part, 255);
  noStroke();
  for (let x = 0; x < part; x++) {
     for (let y = 0; y < part; y++) {
       fill(x, y, blueColor);
       
       var centerX = (x + 0.5) * (windowWidth / part);
       var centerY = (y + 0.5) * (windowWidth / part);
       var diff = Math.sqrt((centerX - mouseX) ** 2 + (centerY - mouseY) ** 2);
       var squareSize = map(diff, 0, windowWidth / part, (windowWidth / 1.5) / part, windowWidth / part * 2);
       squareSize = squareSize / (part / 3);
       if (squareSize > windowWidth / part) {
         squareSize = windowWidth / part;
       }
       var shapeType = random(0, 1);
       var strokeType = random(0, 1);
       var strokeStart = map(5, 0, 50, 0, windowWidth / part);
       var strokeEnd = map(20, 0, 50, 0, windowWidth / part);
       var strokeWidth = random(strokeStart, strokeEnd);
       strokeWeight(strokeWidth);
       
       if (strokeType > 0.5) {
         noStroke();
         fill(x, y, blueColor);
         if (shapeType > 0.5) {
           cSquare(centerX, centerY, squareSize);  
         } else {
           circle(centerX, centerY, squareSize);
         }
       } else {
         noFill();
         stroke(x, y, blueColor);
         if (shapeType > 0.5) {
             cSquare(centerX, centerY, squareSize - strokeWidth); 
         } else {
             circle(centerX, centerY, squareSize - strokeWidth);
         }       
       } 
     }
  }
}

String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

function cSquare(centerX, centerY, size) {
  square(centerX - size / 2, centerY - size / 2, size);
}

function mouseWheel(event) {
    var e = event.delta;
    if (e < 0 && part > 2) {
        part -= 1;
    } else if (e > 0) {
        part += 1;
    }
  
  if (e < 0 && blueColor >= 15) {
    blueColor -= 10;
  } else if (e > 0 && blueColor <= 245) {
    blueColor += 10;
  }
}
