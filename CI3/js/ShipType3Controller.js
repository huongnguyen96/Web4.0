class ShipType3Controller extends ShipController{
  constructor(x, y, isPlayer1,configs){
    var spriteName = "Spaceship3-"+(isPlayer1 ? "Player" : "Partner") + ".png";
    configs.cooldown = 0.1; // toc do cua moi tau
    configs.health = 10; // mau cua tau
    configs.hitBoxRadius = 15;
    configs.hixBoxOffset = new Phaser.Point(25,20);
    super(x, y, spriteName, configs);
    }
  fire(){
    var bullet = new BulletType3Controller(this.sprite.position,"BulletType3.png",new Phaser.Point(0,-10));
    bullet.sprite.anchor = new Phaser.Point(0.5,1);
  }
}
