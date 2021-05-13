const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    if(backgroundImage)
    background(backgroundImage);
    getbackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    async function getBackgroundImage(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
        var responseJSON = await response.json();
        var dateTime = responseJSON.datetime;
        var hour = dateTime.slice(11,13);
        console.log(hour);
    
        if(hour > 06 && hour < 18){
            bg = "sunrise6.png";
        }
        else{
            bg = "sunset11.png";
        }
        backgroundImage = loadImage(bg)
    }
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
