class blackhole {
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.mass = mass;
        this.rs = (2 * G * this.mass) / (c * c);
        this.end = height / 2 - this.rs * maxOrbit;

    }

    gravitationalPull = (photon) => {
        const force = p5.Vector.sub(this.position, photon.position);
        const r = force.mag();
        const uG = G * ((this.mass) / (r * r));
        force.setMag(uG)
        photon.velocity.add(force);
        photon.velocity.setMag(c)

        if (r < 1) {
            // let temp = this.maxOrbit.toString();
            // const lastDigit = temp[myString.length - 1];
            // const newDigit = int(lastDigit) + 1;

            photons = []
            for (let i = mouseY - 100; i < mouseY + 20; i += 10) {
                photons.push(new Photon(mouseX, i))

            }
        } else if (r > this.rs + height) {
            photons = []

            console.log('hit out')
            for (let i = mouseY - 100; i < mouseY + 20; i += 10) {
                photons.push(new Photon(mouseX, i))

            }
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