// Positioning the canvas
const canvas = document.getElementById("MyCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

// Creating 2D context to draw
const ctx = canvas.getContext("2d");

// Object of class Car
const car = new Car(100, 100, 30, 50);

animate();

function animate()
{
    car.update();
    // Calling draw() of class Car
    car.draw(ctx);
    requestAnimationFrame(animate);
}
