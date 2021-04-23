/*Archer
Longyu Li
Game: Archer
Time used: 30 hours

Display the time remaining (in seconds) on the screen (10)
Implement mouse control for player movement and mouse click to fire (20)
Implement a simultaneous two-player mode (30)
Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)

Discord: Tony Alegria helped me understand use delay in Phaser 3
*/

//game configuration
let config = {
    type: Phaser.CANVAS,
    width:640,
    height: 480,
    scene: [ Menu, Play ]
}

//
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let starSpeed = 2;

// reserve keyboard bindings
let keyF, keyR, keyLEFT, keyRIGHT, key1, key2, keyESC;
let mouseclick, mouseX, mouseY;
