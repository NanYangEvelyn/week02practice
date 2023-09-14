let faceWeight = 300;
let eyeWeight = 40;
let eyeHeight = 60;
let eyeballWeight = 30;

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(98,210,102);
}

function draw() {
    background(98,210,102);
    stroke(0);
    strokeWeight(1);
    fill(255,215,0);
    ellipse(500,500,faceWeight,faceWeight);
    fill(255);
    ellipse(440,470,eyeWeight,eyeHeight);
    ellipse(560,470,eyeWeight,eyeHeight);
    fill(0);
    ellipse(440,470,eyeballWeight,eyeballWeight);
    ellipse(560,470,eyeballWeight,eyeballWeight);
    fill(255,123,255);
    rect(475,550,50,10,2,2,2,2);
    // curve(440,550,500,580,540,580,560,550);
    // fill(255);
    // ellipse(mouseX,mouseY,50,50);
    

    translate(100,0)
    stroke(0);
    strokeWeight(1);
    fill(255,215,0);
    ellipse(500,500,faceWeight,faceWeight);
    fill(255);
    ellipse(440,470,eyeWeight,eyeHeight);
    ellipse(560,470,eyeWeight,eyeHeight);
    fill(0);
    ellipse(440,470,eyeballWeight,eyeballWeight);
    ellipse(560,470,eyeballWeight,eyeballWeight);
    fill(255,123,255);
    rect(475,550,50,10,2,2,2,2);
}
