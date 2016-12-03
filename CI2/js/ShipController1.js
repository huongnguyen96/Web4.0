class ShipController1{
  constructor(x,y,spriteName, configs){
    this.configs = configs;
    this.sprite = Nakama.playerGroup.create(
      x,
      y,
      'assets',
      spriteName
    );
    this.sprite.anchor = new Phaser.Point(0.5,0.5);// anchor: mo neo: khien cho bullet nam dung tam(trn mot duong)
    Nakama.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.timeSinceLastFire = 0;// khoi tao thoi gian ban
  }

  update(){
    this.timeSinceLastFire += Nakama.game.time.physicsElapsed;// time.physicsElapsed tu lan update truoc den h la khoang bao nhieu thoi gian
    if(Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -Nakama.configs.SHIP_SPEED;
    }
    else if(Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = Nakama.configs.SHIP_SPEED;
    }
    else{
      this.sprite.body.velocity.y = 0;
    }
    if(Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -Nakama.configs.SHIP_SPEED;
    }
    else if(Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = Nakama.configs.SHIP_SPEED;
    }
    else{
      this.sprite.body.velocity.x = 0;
    }
    if(Nakama.keyboard.isDown(this.configs.fire)&& this.timeSinceLastFire >= this.configs.cooldown){
      this.fire();
      this.timeSinceLastFire = 0;// sau moi lan ban thi dua thoi gian tro ve 0
    }

  }
  fire(){
    var newBullet = new BulletController1(
      this.sprite.position.x,
      this.sprite.position.y,
      'BulletType2.png');
    newBullet.bullet.body.velocity = new Phaser.Point(0, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var newBullet1 = new BulletController1(
        this.sprite.position.x,
        this.sprite.position.y,
        "BulletType2.png");
    newBullet1.bullet.body.velocity = new Phaser.Point(-1,-10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var newBullet2 = new BulletController1(
        this.sprite.position.x,
        this.sprite.position.y,
        "BulletType2.png");
    newBullet2.bullet.body.velocity = new Phaser.Point(1,-10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var newBullet2 = new BulletController1(
      this.sprite.position.x,
      this.sprite.position.y,
      "BulletType2.png");
  newBullet2.bullet.body.velocity = new Phaser.Point(1,-10).setMagnitude(Nakama.configs.BULLET_SPEED);
  }

}
