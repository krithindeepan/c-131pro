img=""
status=""
function preload() {
    img=loadImage("dog_cat.jpg")
}
function setup() {
    canvas=createCanvas(600,400)
    canvas.center()
    objectDetector=ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML="detecting objects"
}
function modelloaded() {
    console.log("modelisloaded")
    status=true
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results) {
if(error) {
  console.error(error)  
}
else{console.log(results)}
}
function draw() {
image(img,0,0,600,400)
fill("red")
text("dog",170,50)
noFill()
stroke("black")
rect(170,50,150,400)
fill("red")
text("cat",300,100)
noFill()
rect(300,100,220,300)
}

    