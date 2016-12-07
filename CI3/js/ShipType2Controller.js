class ShipType2Controller extends ShipController{
  constructor(x, y, isPlayer1,configs){
    var spriteName = "Spaceship2-"+(isPlayer1 ? "Player" : "Partner") + ".png";
    configs.cooldown = 0.1; // toc do cua moi tau
    configs.health = 10; // mau cua tau
    configs.hitBoxRadius = 15;
    configs.hixBoxOffset = new Phaser.Point(25,20);
    super(x, y, spriteName, configs);
  }
  fire(){
    new BulletType2Controller(this.sprite.position,"BulletType1.png",new Phaser.Point(1,-10));
    new BulletType2Controller(this.sprite.position,"BulletType1.png",new Phaser.Point(-1,-10));
  }
}
