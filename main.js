// Positioning the canvas
const canvas = document.getElementById("MyCanvas");
canvas.width = 200;

// Creating 2D context to draw
const ctx = canvas.getContext("2d");

// Object of class Road
const road = new Road(canvas.width/2,canvas.width*0.9);

// Object of class Car
const car = new Car(road.getLaneCenter(1), 100, 30, 50, "AI");

const traffic=[
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY",2)
];

animate();

function animate()
{
    for(let i=0;i<traffic.length;i++){
        traffic[i].update(road.borders,[]);
    }

    car.update(road.borders,traffic);
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7)

    // Calling draw() of class Road
    road.draw(ctx);

    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(ctx,"red");
    }

    // Calling draw() of class Car
    car.draw(ctx,"blue");

    ctx.restore();
    requestAnimationFrame(animate);
}
