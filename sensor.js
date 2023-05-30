class Sensor
{
    constructor(car){
        this.car=car;
        this.rayCount=3;
        this.rayLength=100;
        this.raySpeed=Math.PI/4;

        this.rays=[];
    }

    update(){
        this.rays=[];
        for(let i=0;i<this.rayCount;i++){
            // Remove "+this.car.angle" to make sensors stay straight regradless of car position
            const rayAngle=lerp(
                this.raySpeed/2,
                -this.raySpeed/2,
                i/(this.rayCount-1)
            )+this.car.angle;

            const start={x:this.car.x,y:this.car.y};
            const end={
                x:this.car.x-
                    Math.sin(rayAngle)*this.rayLength,
                y:this.car.y-
                    Math.cos(rayAngle)*this.rayLength
            };
            this.rays.push([start,end]);
        }
    }

    draw(ctx){
        for(let i=0;i<this.rayCount;i++){
            ctx.beginPath();``
            ctx.lineWidth=2;
            ctx.strokeStyle="yellow";
            ctx.moveTo(
                this.rays[i][0].x,
                this.rays[i][0].y
            );
            ctx.lineTo(
                this.rays[i][1].x,
                this.rays[i][1].y
            );
            ctx.stroke();
        }
    }
}