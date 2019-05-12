class Photon {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(-c, 0);
        this.trail = [];
        this.stopped = false;
    }

    stop() {
        this.stopped = true;
    }

    update() {
        if (!this.stopped) {
            this.trail.push(this.position.copy())
            const copyOfSpeed = this.velocity.copy();
            copyOfSpeed.mult(deltaTime);
            this.position.add(copyOfSpeed);

            if (this.trail.length > 10) {
                this.trail.splice(0, 1);
            }
        }

    }



    show() {
        stroke(255, 100, 0);
        strokeWeight(5);
        point(this.position.x, this.position.y);

        stroke(255, 100, 0);
        strokeWeight(5);
        noFill();
        beginShape();
        this.trail.forEach(i => {
            vertex(i.x, i.y)
        });
        endShape();
        // console.log(this.velocity.x, this.velocity.y)
    }
}