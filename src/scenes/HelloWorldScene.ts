import * as Phaser from 'phaser';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'HelloWorld',
};

export class HelloWorldScene extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle | undefined;

    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.square = this.add.rectangle(400, 400, 200, 200, 0xFFFFFF) as Phaser.GameObjects.Rectangle;
        this.physics.add.existing(this.square);

    }

    public update() {
        // TODO
    }
}