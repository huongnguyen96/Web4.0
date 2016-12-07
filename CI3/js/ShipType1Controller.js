class ShipType1Controller extends ShipController{
  constructor(x, y, isPlayer1,configs){
    var spriteName = "Spaceship1-"+(isPlayer1 ? "Player" : "Partner") + ".png";
    configs.cooldown = 0.1; // toc do cua moi tau
    configs.health = 5; // mau cua tau
    configs.hitBoxRadius = 15;
    configs.hixBoxOffset = new Phaser.Point(25,20);
    super(x, y, spriteName, configs);
    }

  fire(){
    new BulletType1Controller(this.sprite.position,"BulletType1.png",new Phaser.Point(0,-10));
    new BulletType1Controller(this.sprite.position,"BulletType1.png",new Phaser.Point(1,-10));
    new BulletType1Controller(this.sprite.position,"BulletType1.png",new Phaser.Point(-1,-10));
    new BulletType1Controller(this.sprite.position,"BulletType1.png",new Phaser.Point(2,-10));
    new BulletType1Controller(this.sprite.position,"BulletType1.png",new Phaser.Point(-2,-10));
  }
}
