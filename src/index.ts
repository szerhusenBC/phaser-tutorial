import {HelloWorldScene} from "./scenes/HelloWorldScene";

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

    scene: HelloWorldScene
};

export const game = new Phaser.Game(gameConfig);