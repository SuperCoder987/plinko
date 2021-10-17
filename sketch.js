var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
let bg;
const s = document.querySelector('#s')

function preload() {
  bg = loadImage('img/bg.jpg');
}

function setup() {
  frameRate(60);
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinkos
  for (let i = 50; i <= width - 10; i += 50)
    for (let j = 100; j <= 400; j += 100)
      plinkos.push(new Plinko(i + (j % 200 == 0 ? 25 : 0), j))

}
 


function draw() {
  background(bg);
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (const p in plinkos) {
    plinkos[p].display();  
  }
   
  //display the divisions
  for (const d in divisions) {
    divisions[d].display();
  }

  //create the particles using frameCount
  if (frameCount % s.value == 0 && particles.length < 600) {
    particles.push(new Particle(random(0, width), 0));
  }

  //display the particles 
  for (const p in particles) {
    particles[p].display();
  }

}