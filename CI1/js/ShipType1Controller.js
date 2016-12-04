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
    new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(0,-10),{
      power : 20
    });
    new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(1,-10),{
      power : 20
    });
    new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(-1,-10),{
      power : 20
    });
    new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(3,-10),{
      power : 20
    });
    new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(-3,-10),{
      power : 20
    });
  }
}
