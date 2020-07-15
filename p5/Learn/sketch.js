/**
Source of Learning
// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
// Example 16-13: Simple motion detection
*/

var snap;
var prevsnap;
// How different must a pixel be to be a "motion" pixel
var threshold = 50;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	snap = createCapture(VIDEO);
	snap.size(windowWidth, windowHeight);

	prevsnap = createImage(snap.width,snap.height,RGB);
}

function draw() {
	image(prevsnap,0,0,windowWidth, windowHeight);

	
	loadPixels();
	prevsnap.loadPixels();
	snap.loadPixels();
	
	// noprotect
	for (var y=0; y < snap.width; y++){
		for (var x=0; x < snap.height; x++ ){
			/*
			If we have a 10X10X3 Image, Pixels are arranged in snap in such a way that
			[(0,0)R,(0,0)G,(0,0)B,(0,0)A,(1,0)R,(1,0)G,(1,0)B,(1,0)A,...................(99,99)R,(99,99)G,(99,99)B,(99,99)A]
			*/

			
			var index = 4 * (x + y * snap.width);

			var r1 = prevsnap.pixels[index]; 
			var g1 = prevsnap.pixels[index+1];
			var b1 = prevsnap.pixels[index+2];

			var r2 = snap.pixels[index]; 
			var g2 = snap.pixels[index+1];
			var b2 = snap.pixels[index+2];

			var similarity = Math.sqrt(Math.pow((r1-r2),2) + Math.pow((g1-g2),2) + Math.pow((b1-b2),2));

			if (similarity > threshold){
				pixels[index] = 255;
				pixels[index+1] = 255;
				pixels[index+2] = 255;
				pixels[index+3] = 255;
			}

			else{
				pixels[index] = 0;
				pixels[index+1] = 0;
				pixels[index+2] = 0;
				pixels[index+3] = 255;
			}
		}
	}

	updatePixels();
	prevsnap.copy(snap, 0, 0, snap.width, snap.height, 0, 0, snap.width, snap.height);
}