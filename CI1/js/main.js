var Nakama = {};
Nakama.configs = {
  SHIP_SPEED : 200,//gán dl chung, khi thay đổi sẽ ko phải làm nhiều lần
  BULLET_SPEED: 1000,//toc do dan nhanh hon
  PLAYER_TYPE: {
    PLAYER_1 : true,
    PLAYER_2 : false
  },

}
window.onload = function(){
  Nakama.configs.SHIP_TYPE = {
    SHIP_TYPE_1 : ShipType1Controller,
    SHIP_TYPE_2 : ShipType2Controller,
    SHIP_TYPE_3 : ShipType3Controller,
  },
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
var backgrounds;
var create = function(){

  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard  = Nakama.game.input.keyboard;
  //set background
  background = Nakama.game.add.tileSprite(0, 0, 1000, 1000, 'background');
  backgrounds = 5;

  // de tau duoc ve tren dan, tuc la luc ban dan se di ra tu mui tau, chu ko de len tren tau
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();

  Nakama.shipControllers = [];
  var player1Constructor = getPlayerShipChoice("Player1");
  var player2Constructor = getPlayerShipChoice("Player2");

  var player1 = new player1Constructor(400,800,Nakama.configs.PLAYER_TYPE.PLAYER_1,{
    up:       Phaser.Keyboard.UP,
    down:     Phaser.Keyboard.DOWN,
    left:     Phaser.Keyboard.LEFT,
    right:    Phaser.Keyboard.RIGHT,
    fire:     Phaser.Keyboard.SPACEBAR,
  });
  Nakama.shipControllers.push(player1);

  var player2 = new player2Constructor(200,800,Nakama.configs.PLAYER_TYPE.PLAYER_2,{
    up: Phaser.Keyboard.W,
    down: Phaser.Keyboard.S,
    left: Phaser.Keyboard.A,
    right: Phaser.Keyboard.D,
    fire: Phaser.Keyboard.SHIFT,

  });
  Nakama.shipControllers.push(player2);

  //enemy
  var enemy = new EnemyController(new Phaser.Point(320,100),"EnemyType1.png",{
    health: 200
  });
  var enemy2 = new EnemyController(new Phaser.Point(420,100),"EnemyType2.png",{
    health: 200
  });
  var enemy3 = new EnemyController(new Phaser.Point(320,200),"EnemyType3.png",{
    health: 200
  });

}

var update = function() {
  background.tilePosition.y += backgrounds;
  for(var i = 0 ; i < Nakama.shipControllers.length;i++){
    Nakama.shipControllers[i].update();
  }

  Nakama.game.physics.arcade.overlap(Nakama.bulletGroup,Nakama.enemyGroup,onBulletHitActor);//kiem tra xem 1 cai nao trong bulletGroup va enemyGroup va cham vao nhau thi bat su khien

}
function onBulletHitActor(bulletSprite,actorSprite){
  actorSprite.damage(bulletSprite.power);//
  bulletSprite.kill();// neu bat trung su kien thi ban chet

}

function getPlayerShipChoice(){
  var player1Choice = prompt("Please choose ship type");
  player1Choice = parseInt(player1Choice);
  switch (player1Choice) {
    case 1:
      default:
      var playerConstructor = Nakama.configs.SHIP_TYPE.SHIP_TYPE_1;
      break;
    case 2:
      var playerConstructor = Nakama.configs.SHIP_TYPE.SHIP_TYPE_2;
      break;
    case 3:
      var playerConstructor = Nakama.configs.SHIP_TYPE.SHIP_TYPE_3;
      break;
    }
    return playerConstructor;
}

var render = function(){
  Nakama.playerGroup.forEachAlive(function(sprite){
    Nakama.game.debug.body(sprite);
  });
  Nakama.bulletGroup.forEachAlive(function(sprite){
    Nakama.game.debug.body(sprite);
  });
  Nakama.enemyGroup.forEachAlive(function(sprite){
    Nakama.game.debug.body(sprite);
  });
}
