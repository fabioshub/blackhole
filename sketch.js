const c = 3;
const G = 6.6 * (10^-11)
const deltaTime = 1;

let firstBH;
let photons = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    ellipseMode(RADIUS);
    firstBH = new blackhole(window.innerWidth / 2, window.innerHeight / 2, 5.6 * (10^24));
    Tracker = new Tracker()

    let start = height / 2;
    let end = height / 2 - firstBH.rs * 1.4;
    // for (let i = end; i < start; i+=10) {
        photons.push(new Photon(width - 30, end))

    // }
}

function draw() {
    background(220);
    firstBH.show()

    photons.forEach(photon => {
        firstBH.gravitationalPull(photon);
        photon.update()
        photon.show()
        Tracker.draw(firstBH, photon)
    });

}