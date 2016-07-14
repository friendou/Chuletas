var States = {};

// Loads all the necesasary assets before starting the game.
States.Boot = {
	// Loads the assets.
	preload: function(){
		this.game.load.image('dukeCollider', 'assets/images/characters/collider.png');
		this.game.load.image('blockH', 'assets/images/backgrounds/blockH.png');
		this.game.load.image('block', 'assets/images/backgrounds/block.png');
		this.game.load.spritesheet('duke', 'assets/images/characters/duke.png', 23, 43);
		
		this.game.load.image('map', 'assets/images/backgrounds/yourmommasmap.png');

		this.game.load.spritesheet('portal', 'assets/images/misc/portal.png', 123, 123);

		this.game.load.image('background', 'assets/images/reticle/background.png');

		this.game.load.spritesheet('reticle', 'assets/images/reticle/reticle.png', 100, 100);

		this.game.load.image('target', 'assets/images/reticle/target.png');
		
		this.game.load.image('reticleCollider', 'assets/images/reticle/reticleCollider.png');
	},
	// Starts the next state.
	create: function(){
		this.state.start('Play');
	}
};
