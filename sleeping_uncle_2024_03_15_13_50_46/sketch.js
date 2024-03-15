//@ts-nocheck
let soundKnarren;

//VIDEO
//schlafendes Monster
let videoStart;
//sich bewegendes Monster
let videoSchnarchen;
//Wütendes Monster (Verloren)
let videoAufwachen;
//Sandwich (Gewonnen)
let videoSandwich;

let currentVideo;

function preload() {
    soundKnarren = loadSound('videos/knarren.mp3');
    //VIDEO
    videoStart = createVideo('videos/start.mp4');
    videoSchnarchen = createVideo('videos/schnarchen.mp4');
    videoAufwachen = createVideo('videos/aufwachen.mp4');
    videoSandwich = createVideo('videos/sandwich.mp4');

}


function setup() {
    const canvas = createCanvas(384, 216);
    //canvas.parent("sketch");
    currentVideo = videoStart;
    videoStart.hide();
    videoSchnarchen.hide();
    videoAufwachen.hide();
    videoSandwich.hide();
}


function draw() {
    background(250);
    image(currentVideo, 0, 0, width, height);

}

function start() {
    videoSandwich.stop();
    videoSchnarchen.stop();
    videoAufwachen.stop();
    currentVideo = videoStart;
    currentVideo.loop();
}

function knarren() {
    soundKnarren.play();
    soundKnarren.onended(start);
}

function schnarchen() {
    videoStart.stop();
    currentVideo = videoSchnarchen;
    currentVideo.play();
    currentVideo.onended(start);
}

//Wütendes Monster (Verloren)
function aufwachen() {
    videoStart.stop();
    videoSchnarchen.stop();
    videoAufwachen.stop();
    currentVideo = videoAufwachen;
    currentVideo.play();
}

function sandwich() {
    videoStart.stop();
    videoSchnarchen.stop();
    videoAufwachen.stop();
    currentVideo = videoSandwich;
    currentVideo.play();



}
