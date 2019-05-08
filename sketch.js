const c = 30;
const G = 6;
const deltaTime = 0.1;

let firstBH;
let photons = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    ellipseMode(RADIUS);
    firstBH = new blackhole(window.innerWidth / 2, window.innerHeight / 2, 6500);


    let start = height / 2;
    let end = height / 2 - firstBH.rs * 2.6;
    for (let i = end; i < start; i++) {
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
    });
}