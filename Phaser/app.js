console.log("lol");

// Declaring variables at the top
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', 
	{preload: preload, create: create, update: update}
	);

var score = 0;

function preload() {
	// load some assets
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create() {
	// define the physics
	game.physics.startSystem(Phaser.Physics.ARCADE);
	// add the sky
	game.add.sprite(0, 0, 'sky');

	// Make group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	// Ground
	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	// Ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	// Player
	player = game.add.sprite(32, 450, 'dude');
		// animate the sprite
		player.animations.add('left', [0,1,2,3], 10, true);
		player.animations.add('right', [5,6,7,8], 10, true);
		game.physics.arcade.enable(player);
		// creating physics for player sprite
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	// Enemy
	enemy1 = game.add.sprite(750, 20, 'baddie');
		// animate the sprite
		enemy1.animations.add('left', [0,1], 10, true);
		enemy1.animations.add('right', [2,3], 10, true);
		game.physics.arcade.enable(enemy1);
		// creating physics for enemy sprite
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;
}

function update() {

}













//