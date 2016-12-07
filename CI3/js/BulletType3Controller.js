class BulletType3Controller extends BulletController{
   constructor(position, isBullet1, direction, configs){// position bao gom x,y, direction de xem ban duoc ban ve huong nao
     var spriteName = "BulletType3.png";
    //  configs.anchor = new Phaser.Point(0.5,1);
     super(position, spriteName, direction, {
       power : 10
     });
   }
 }
