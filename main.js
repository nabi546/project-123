var leftWrist= 0;
var rightWrist= 0;
var difference= 0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(500,500)

    canvas = createCanvas(700,400)
    canvas.position(560,150)
    poseNet=ml5.poseNet(video, ModalLoaded);
    poseNet.on('pose', gotPoses);
}
function ModalLoaded()
{
    console.log("Model is succsesfully loaded");
}
function draw()
{
    background("#5196e3");
    document.getElementById("font-size").innerHTML = "Font size of the text will be : "+difference+"px";
    fill("pink");
    textSize(difference);
    text('Devishi',100,300)
}
function gotPoses(results,error)
{
    if(error)
    {
        console.log(error);
    }
    if(results.length>0);
    {
        console.log(results);
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(leftWrist-rightWrist);
        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+"rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x+"leftwrist_y = "+results[0].pose.leftWrist.y);
    }
}