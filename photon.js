class Photon {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(-c, 0);
    }

    update() {
        const copyOfSpeed = this.velocity.copy();
        copyOfSpeed.mult(deltaTime);
        this.position.add(copyOfSpeed);
    }



    show() {
        stroke(255, 100, 0);
        strokeWeight(5);
        point(this.position.x, this.position.y);
        // console.log(this.velocity.x, this.velocity.y)
    }
}