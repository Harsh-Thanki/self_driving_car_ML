// Positioning the canvas
const canvas = document.getElementById("MyCanvas");
canvas.width = 200;

// Creating 2D context to draw
const ctx = canvas.getContext("2d");

// Object of class Car
const car = new Car(100, 100, 30, 50);

animate();

function animate()
{
    car.update();
    canvas.height = window.innerHeight;
    // Calling draw() of class Car
    car.draw(ctx);
    requestAnimationFrame(animate);
}
