import {StarsScene} from "./scenes/StarsScene";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: "Sample",

    type: Phaser.AUTO,

    scale: {
        width: 800,
        height: 600
    },

    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            gravity: {y: 200}
        }
    },

    parent: "game",
    backgroundColor: "#000000",

    scene: StarsScene
};

export const game = new Phaser.Game(gameConfig);