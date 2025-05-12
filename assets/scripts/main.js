let config = {
    type: Phaser.AUTO,
    width: 1408, 
    height: 768, 
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }, 
            debug: true 
        }
    },
    scene: [MenuScene, GameScene, CreditsScene,] 
};

let game = new Phaser.Game(config);