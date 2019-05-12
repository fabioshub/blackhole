const c = 30;
const G = 6.11
const deltaTime = 0.4;
const maxOrbit = 2.997270254
let acc = 1;

let firstBH;
let photons = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    ellipseMode(RADIUS);
    firstBH = new blackhole(window.innerWidth / 2, window.innerHeight / 2, 5000);
    Tracker = new Tracker()

    let start = height / 2;
    let end = height / 2 - firstBH.rs * maxOrbit;

    photons.push(new Photon(width - 30, end))

    for (let i = mouseY - 100; i < mouseY + 20; i += 10) {
        photons.push(new Photon(width - 30, i))

    }

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