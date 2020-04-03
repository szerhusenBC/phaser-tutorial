import * as Phaser from "phaser";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "HelloWorld",
};

const key = {
    image: {
        sky: "sky",
        ground: "ground",
        star: "star",
        bomb: "bomb"
    },
    spritesheet: {
        dude: "dude"
    },
    anim: {
        left: "left",
        turn: "turn",
        right: "right"
    }
};

export class HelloWorldScene extends Phaser.Scene {

    private platforms: Phaser.Physics.Arcade.StaticGroup | undefined;
    private player: Phaser.Physics.Arcade.Sprite | undefined;

    constructor() {
        super(sceneConfig);
    }

    preload() {
        this.load.image(key.image.sky, "assets/sky.png");
        this.load.image(key.image.ground, "assets/platform.png");
        this.load.image(key.image.star, "assets/star.png");
        this.load.image(key.image.bomb, "assets/bomb.png");

        this.load.spritesheet(key.spritesheet.dude,
            "assets/dude.png",
            {frameWidth: 32, frameHeight: 48}
        )
    }

    public create() {
        this.add.image(400, 300, key.image.sky);

        this.createPlatforms();
        this.createPlayer();
    }

    public update() {
        // TODO
    }

    private createPlatforms() {
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, key.image.ground).setScale(2).refreshBody(); // level ground platform
        this.platforms.create(600, 400, key.image.ground);
        this.platforms.create(50, 250, key.image.ground);
        this.platforms.create(750, 220, key.image.ground);
    }

    private createPlayer() {
        this.player = this.physics.add.sprite(100, 450, key.spritesheet.dude);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: key.anim.left,
            frames: this.anims.generateFrameNumbers(key.spritesheet.dude, {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: key.anim.turn,
            frames: [{key: key.spritesheet.dude, frame: 4}],
            frameRate: 20
        });

        this.anims.create({
            key: key.anim.right,
            frames: this.anims.generateFrameNumbers(key.spritesheet.dude, {start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });
    }
}