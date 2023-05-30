// Positioning the canvas
const canvas = document.getElementById("MyCanvas");
canvas.width = 200;

// Creating 2D context to draw
const ctx = canvas.getContext("2d");

// Object of class Road
const road = new Road(canvas.width/2,canvas.width*0.9);

// Object of class Car
const car = new Car(100, 100, 30, 50);

animate();

function animate()
{
    car.update();
    canvas.height = window.innerHeight;
    // Calling draw() of class Road
    road.draw(ctx);
    // Calling draw() of class Car
    car.draw(ctx);
    requestAnimationFrame(animate);
}
