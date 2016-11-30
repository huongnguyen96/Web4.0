var Nakama = {};
Nakama.configs = {
  SHIP_SPEED : 200,//gán dl chung, khi thay đổi sẽ ko phải làm nhiều lần
  BULLET_SPEED: 1000//toc do dan nhanh hon
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
  Nakama.game.time.advancedTiming = true;
};

var create = function(){

  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard  = Nakama.game.input.keyboard;
  // de tau duoc ve tren dan, tuc la luc ban dan se di ra tu mui tau, chu ko de len tren tau
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();

  Nakama.shipControllers = [];
  var player1 = new ShipController(400,800,"Spaceship1-Player.png",{
    up:       Phaser.Keyboard.UP,
    down:     Phaser.Keyboard.DOWN,
    left:     Phaser.Keyboard.LEFT,
    right:    Phaser.Keyboard.RIGHT,
    fire:     Phaser.Keyboard.SPACEBAR,
    cooldown: 0.1// thoi gian de co the ban mot vien dan
  });
  Nakama.shipControllers.push(player1);

  var player2 = new ShipController(200,800,"Spaceship1-Player.png",{
    up: Phaser.Keyboard.W,
    down: Phaser.Keyboard.S,
    left: Phaser.Keyboard.A,
    right: Phaser.Keyboard.D,
    fire: Phaser.Keyboard.SHIFT,
    cooldown: 0.1
  });
  Nakama.shipControllers.push(player2);
  var enemy = Nakama.enemyGroup.create(
    320,
    100,
    'assets',
    "EnemyType1.png"
  );
  enemy.health = 200;
};

var update = function() {
  for(var i = 0 ; i < Nakama.shipControllers.length;i++){
    Nakama.shipControllers[i].update();
  }
  Nakama.game.physics.arcade.overlap(Nakama.bulletGroup,Nakama.enemyGroup,onBulletHitActor);//kiem tra xem 1 cai nao trong bulletGroup va enemyGroup va cham vao nhau thi bat su khien

}
function onBulletHitActor(bulletSprite,actorSprite){
  actorSprite.damage(1);//
  bulletSprite.kill();// neu bat trung su kien thi ban chet
}
var render = function(){}
