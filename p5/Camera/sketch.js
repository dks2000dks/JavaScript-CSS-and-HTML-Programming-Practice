let capture;
let snap;

function setup() {
	createCanvas(windowWidth, windowHeight);
	capture = createCapture(VIDEO);
}

function draw() {
	background(0);
	image(capture,0,0,windowWidth, windowHeight);
}

function mousePressed(){
	console.log("Image Captured");
	capture.get();
}