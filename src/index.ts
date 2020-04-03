import * as Phaser from 'phaser';
import {HelloWorldScene} from "./scenes/HelloWorldScene";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',

    type: Phaser.AUTO,

    scale: {
        width: window.innerWidth,
        height: window.innerHeight
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },

    parent: 'game',
    backgroundColor: '#000000',

    scene: HelloWorldScene
};

export const game = new Phaser.Game(gameConfig);