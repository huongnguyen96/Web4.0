var Nakama = {};
Nakama.configs = {
  SHIP_SPEED : 200,//gán dl chung, khi thay đổi sẽ ko phải làm nhiều lần
  BACK_SPEED : 1,
  FIRE_SPEED : 400,
  FIRE_RATE : 60
}
window.onload = function(){
  Nakama.game = new Phaser.Game(
    640,
    960,
    Phaser.AUTO,
    '',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    },
    false,
    false
  );
}
var sprite;
var weapon;
var cursors;
var fireButton;
var preload = function(){
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png',
              'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
  Nakama.game.load.image('aliens','Assets/player.png');
  Nakama.game.time.advancedTiming = true;
};
var starfield;
var aliens;
var create = function(){
  //set background
  Nakama.starfield = Nakama.game.add.tileSprite(0, 0, 640, 960, 'background');
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard  = Nakama.game.input.keyboard;
  //set tau 1
  Nakama.ship2 = Nakama.game.add.sprite(
    200,
    400,
    'assets',
    "Spaceship1-Partner.png"
  );
  Nakama.game.physics.enable(Nakama.ship2,Phaser.Physics.ARCADE);
  //set tau 2
  // Nakama.ship = Nakama.game.add.sprite(
  //   200,
  //   400,
  //   'assets',
  //   "Spaceship1-Player.png"
  // );
//  Nakama.game.physics.enable(Nakama.ship, Phaser.Physics.ARCADE);
  //create bullet
  Nakama.weapon = Nakama.game.add.weapon(30,'assets',"BulletType1.png");
  Nakama.game.physics.enable(Nakama.bullet,Phaser.Physics.ARCADE);
  Nakama.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  Nakama.weapon.bulletAngleOffset = 90;
  Nakama.weapon.bulletSpeed = Nakama.configs.FIRE_SPEED;
  Nakama.weapon.fireRate = Nakama.configs.FIRE_RATE;
  Nakama.weapon.trackSprite(Nakama.ship, 38,-12);
  ///create Ailen
  Nakama.ailens = Nakama.game.add.group();
  aliens.enableBody = true;
  aliens.physicsBodyType = Phaser.Physics.ARCADE;
  createAliens();
};
function createAliens () {
    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < 10; x++)
        {
            var alien = aliens.create(x * 48, y * 50, 'ailens');
            alien.anchor.setTo(0.5, 0.5);
            alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            alien.play('fly');
            alien.body.moves = false;
        }
    }

    aliens.x = 100;
    aliens.y = 50;

    var tween = game.add.tween(aliens).to( { x: 200 },
      2000,
      Phaser.Easing.Linear.None, true, 0, 1000, true
    );

    //  When the tween loops it calls descend
    tween.onLoop.add(descend, this);
}

var update = function() {
    //  Scroll the background
  Nakama.starfield.tilePosition.y += Nakama.configs.BACK_SPEED;
  //tau 1
  if(Nakama.keyboard.isDown(Phaser.Keyboard.UP)){
    Nakama.ship.body.velocity.y = -Nakama.configs.SHIP_SPEED;
  }
  else if(Nakama.keyboard.isDown(Phaser.Keyboard.DOWN)){
    Nakama.ship.body.velocity.y = Nakama.configs.SHIP_SPEED;
  }
  else{
    Nakama.ship.body.velocity.y = 0;
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.LEFT)){
    Nakama.ship.body.velocity.x = -Nakama.configs.SHIP_SPEED;
  }
  else if(Nakama.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    Nakama.ship.body.velocity.x = Nakama.configs.SHIP_SPEED;
  }
  else{
    Nakama.ship.body.velocity.X = 0;
  }
//tau 2
/*  if(Nakama.keyboard.isDown(Phaser.Keyboard.W)){
    Nakama.ship2.body.velocity.y = -Nakama.configs.SHIP_SPEED;
  }
  else if(Nakama.keyboard.isDown(Phaser.Keyboard.S)){
    Nakama.ship2.body.velocity.y = Nakama.configs.SHIP_SPEED;
  }
  else{
    Nakama.ship2.body.velocity.y = 0;
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.A)){
    Nakama.ship2.body.velocity.x = -Nakama.configs.SHIP_SPEED;
  }
  else if(Nakama.keyboard.isDown(Phaser.Keyboard.D)){
    Nakama.ship2.body.velocity.x = Nakama.configs.SHIP_SPEED;
  }
  else{
    Nakama.ship2.body.velocity.X = 0;
  }
  */
  //dan
  if(Nakama.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
         Nakama.weapon.fire();
     }

}
var render = function(){}
