img = "";
status ="";
objects = [];
function preload() {
    img=loadImage('dog_cat.jpg');
}

function setup() {
canvas = createCanvas(640,420);
canvas.center();
video = createCapture(VIDEO);
video.size(380,380);
video.hide();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video,gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video,0,0,380,380);

     if(status !="")
     {
        r = random(255);
        b = random(255);
        g = random(255);
        objectDetector.detect(video, gotResult);
        for(i = 0; i <objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+object.length;

            fill( r,b,g);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" +precent + "%", objects[i].x, objects[i].y);
            nofill();
            stroke(r,b,g);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
     }

    Fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    image(img,0,0,640,420);
    Fill("#FF0000");
    text("Cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}