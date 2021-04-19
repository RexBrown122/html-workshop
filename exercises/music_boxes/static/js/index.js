/**
 * Rainbow Piano
 *
 * Use HTML, CSS and JS to create a simple piano with 7 notes. Each key should be
 * a different color and all keys should have a hover effect. Clickin ga key on the piano
 * should play a note.
 */

// Blue Button
let blue = () => {
    let audio = new Audio("..\\music_boxes\\static\\media\\c_note.mp3");
    audio.play();
}

// Red Button
let red = () => {
    let audio = new Audio("..\\music_boxes\\static\\media\\d_note.mp3");
    audio.play();
}

// Yellow Button
let yellow = () => {
    let audio = new Audio("..\\music_boxes\\static\\media\\e_note.mp3");
    audio.play();
}

// Green Button
let green = () => {
    let audio = new Audio("..\\music_boxes\\static\\media\\f_note.mp3");
    audio.play();
}

// Purple Button
let purple = () => {
    let audio = new Audio("..\\music_boxes\\static\\media\\g_note.mp3");
    audio.play();
}

// Orange Button
let orange = () => {
    let audio = new Audio("..\\music_boxes\\static\\media\\a_note.mp3");
    audio.play();
}

// Pink Button
let pink = () => {
    let audio = new Audio("..\\music_boxes\\static\\media\\b_note.mp3");
    audio.play();
}