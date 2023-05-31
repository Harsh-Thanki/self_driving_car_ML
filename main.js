// Positioning the canvas
const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 200;

// Creating 2D context to draw
const ctx = carCanvas.getContext("2d");

// Object of class Road
const road = new Road(carCanvas.width/2,carCanvas.width*0.9);

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
    carCanvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+carCanvas.height*0.7)

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
