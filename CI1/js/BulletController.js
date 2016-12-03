class BulletController{
  constructor(x,y,spriteName){
    this.bullet = Nakama.bulletGroup.create(
    x,
    y,
    'assets',
    spriteName);
  this.bullet.anchor = new Phaser.Point(0.5,0.5);//tao moi
  //   Nakama.game.physics.enable(newBullet, Phaser.Physics.ARCADE);
  //   newBullet.body.velocity.y = -Nakama.configs.BULLET_SPEED;
  }
}
