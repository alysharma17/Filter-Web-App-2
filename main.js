function preload() {

}

function setup() {
    Canvas=createCanvas(450, 450);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(450,450);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    image(video, 0,0, 450,450);

}

function take_snapshot() {
    save('filter.png')
}

function modelLoaded() {

    console.log("PoseNet has loaded!");
}

function gotposes(results) {
    if (results.length>0) {
        console.log(results);
        console.log(" X coordinates of the nose are " +results[0].pose.nose.x );
        console.log(" Y coordinates of the nose are " +results[0].pose.nose.y);
    }
}