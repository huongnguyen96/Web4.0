class BulletController{
   constructor(position,spriteName, direction, configs){// position bao gom x,y, direction de xem ban duoc ban ve huong nao
     this.configs = configs;
     this.sprite = Nakama.bulletGroup.create(
       position.x,
       position.y,
       'assets',
       spriteName
     );
     this.sprite.anchor = new Phaser.Point(0.5,0.5);
     this.sprite.power = this.configs.power;// power: damage cua vien dan
     this.sprite.checkWorldBounds = true;
     this.sprite.outOfBoundsKill = true;
     this.sprite.body.velocity = direction.setMagnitude(Nakama.configs.BULLET_SPEED);
     //goc huong di cua vien dan so voi 0 do;
     this.sprite.angle = Math.atan2(direction.x, -direction.y)*(180/Math.PI);
     //khi bij giet thi ham explose se xoa enemy ra khoi mang day.
     //this.sprite.events.onKilled.add(this.explode, this);
   }
   update(){

   }

  //  explode(){
  //    var index = Nakama.bulletList.indexOf(this);
  //    if(index > -1)
  //  }
 }
