class Plinko{
    constructor(x, y) {
        var options = {
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x, y, 10, options);
        this.image = loadImage("octagon.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        imageMode(RADIUS);
        fill(18, 6, 77);
        stroke(18, 6, 77);
        image(this.image,pos.x, pos.y, this.r, this.r);
      }
}