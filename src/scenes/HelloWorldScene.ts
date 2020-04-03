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

        this.platforms = this.createPlatforms();
        this.player = this.createPlayer();

        this.physics.add.collider(this.player, this.platforms);
    }

    public update() {
        // TODO
    }

    private createPlatforms(): Phaser.Physics.Arcade.StaticGroup {
        const platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, key.image.ground).setScale(2).refreshBody(); // level ground platform
        platforms.create(600, 400, key.image.ground);
        platforms.create(50, 250, key.image.ground);
        platforms.create(750, 220, key.image.ground);

        return platforms;
    }

    private createPlayer(): Phaser.Physics.Arcade.Sprite {
        const player = this.physics.add.sprite(100, 450, key.spritesheet.dude);
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

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

        return player;
    }
}