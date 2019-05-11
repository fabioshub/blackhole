class Tracker {
    constructor() {
    }

    draw(blackhole, photon) {
        stroke(255, 200, 0);
        strokeWeight(2);
        noFill();
        line(blackhole.position.x, blackhole.position.y, photon.position.x, photon.position.y)
        let d = int(dist(blackhole.position.x, blackhole.position.y, photon.position.x, photon.position.y))
        text("hey", d.x, d.y);

    }
}