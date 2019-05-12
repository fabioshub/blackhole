class Tracker {
    constructor() {
    }

    draw(blackhole, photon) {


        stroke(255, 0, 255);
        strokeWeight(2);
        noFill();
        line(blackhole.position.x, blackhole.position.y, photon.position.x, photon.position.y)
        let d = int(dist(blackhole.position.x, blackhole.position.y, photons.reduce((acc, photon) => {
            return acc + photon.position.x
        }), photons.reduce((acc, photon) => {
            return acc + photon.position.y
        })))
        noStroke()
        fill(0)
        textSize(32);
        text(d, 10, 30);

    }
}