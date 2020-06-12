const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var database;
var gameState=0;
var runnerCount;
var form,runner,game;
var runners, runner1, runner2, runner3, runner4;
var runner1I, runner2I, runner3I, runner4I, track;
var track;
var allRunners;
var canvas;
var hurdle, hurdle1, hurdle2, hurdle3;

function preload(){
  runner1I = loadImage("images/runner1.png");
  runner2I = loadImage("images/runner2.png");
  runner3I = loadImage("images/runner3.png");
  runner4I = loadImage("images/runner4.png");
  track = loadImage("images/track.jpg");
}

function setup(){
  database = firebase.database();
  canvas =  createCanvas(1000, 600);

  engine = Engine.create();
	world = engine.world;

  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  if(runnerCount === 4){
     game.update(1);
  }
  if(gameState === 1){
    clear();
     game.play();
  }
 // console.log(runner.distance);
}