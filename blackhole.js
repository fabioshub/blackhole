class blackhole {
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.mass = mass;
        this.rs = (2 * G * this.mass) / (c * c);
    }

    gravitationalPull = (photon) => {
        const force = p5.Vector.sub(this.position, photon.position);
        const r = force.mag();
        const uG = G * ((this.mass) / (r * r));
        force.setMag(uG)
        photon.velocity.add(force);
        photon.velocity.setMag(c)

        if (force.mag() > this.position.mag()) {
            photon.stop()
        }
    }

    show() {
        fill(0);
        noStroke()
        ellipse(this.position.x, this.position.y, this.rs)

        stroke(100);
        noFill();
        strokeWeight(5);
        ellipse(this.position.x, this.position.y, this.rs * 3);

        stroke(200);
        noFill();
        strokeWeight(5);
        ellipse(this.position.x, this.position.y, this.rs * 1.5);
    }
}