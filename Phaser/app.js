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
	enemy2 = game.add.sprite(750, 20, 'baddie');
		// animate the sprite
		enemy2.animations.add('left', [0,1], 10, true);
		enemy2.animations.add('right', [2,3], 10, true);
		game.physics.arcade.enable(enemy2);
		// creating physics for enemy sprite
		enemy2.body.bounce.y = 0.2;
		enemy2.body.gravity.y = 500;
		enemy2.body.collideWorldBounds = true;
    
    	enemy3 = game.add.sprite(750, 20, 'baddie');
		// animate the sprite
		enemy3.animations.add('left', [0,1], 10, true);
		enemy3.animations.add('right', [2,3], 10, true);
		game.physics.arcade.enable(enemy3);
		// creating physics for enemy sprite
		enemy3.body.bounce.y = 0.2;
		enemy3.body.gravity.y = 500;
		enemy3.body.collideWorldBounds = true;
    

	cursors = game.input.keyboard.createCursorKeys();

	stars = game.add.physicsGroup();
	stars.enableBody = true;
	for (var i = 0; 12; i++) {
		var star = star.create(i * 70,0,'star')
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}

function update() {
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade(enemy1, platforms);
	player.body.velocity.x = 0;
	//key pressed
	if (cursors.left.isDown){
		player.body.velocity.x = -150;
		player.animations.play('right')
	} else if (cursors.right.isDown){
		player.body.velocity.x = 150;
		player.animations.play('right')

	} else {
		player.animations.stop();
		player.frame = 4;
	} {
		if (cursors.up.isDown && player.body.touching.down)
			player.body.velocity.y = -300
	}
}
// Enemy AI
	if (enemy1.x > 749)
		enemy1.body.veloctiy.x = -100;
		enemy1.animations.play('left')
  } else if (enemy1.x < 405)
  enemy1.body.velocity.x = 120
  enemy1.animations.play('right');
}
if (enemy2.x > 749)
		enemy2.body.veloctiy.x = -100;
		enemy2.animations.play('left')
  } else if (enemy2.x < 405)
  enemy2.body.velocity.x = 120
  enemy2.animations.play('right');
}
if (enemy3.x > 749)
		enemy3.body.veloctiy.x = -100;
		enemy3.animations.play('left')
  } else if (enemy3.x < 405)
  enemy3.body.velocity.x = 120
  enemy3.animations.play('right');
}



 game.physics.arcade.collide(stars, platforms);
 game.physics.arcade.over.collide(player, stars) {

 
 function collectStar (player, star)
 	star.kill();
 	score = score + 1;
 	star = stars.create(Math.floor(math.random) * 750), 0, 'star'), 0 , 'star';
 }

 //
 function loseLife (player, enemy) {
 	enemy.kill();
 	score = score - 1;
 }













//