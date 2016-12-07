class BulletType1Controller extends BulletController{
   constructor(position, isBullet1, direction, configs){// position bao gom x,y, direction de xem ban duoc ban ve huong nao
     var spriteName = "BulletType1.png";
     super(position, spriteName, direction, {
       power : 20
     });
   }

 }
