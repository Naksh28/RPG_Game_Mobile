var player, villager, i1, i2, i3, i4;
var bg, bow, potion, sword, bomb;
var knight, wizard, archer;
var h1, h2, h3, b1, b2, b3, b4, b5, b6;
var zombie, bombZombie, bat;
var fireballGroup, fireball, knifeGroup, knife, aroowGroup, arrow;
var flag, zomGroup, bzomGroup, batGroup;
var score, o1, o2, o3, health, gameState;
var treasure, orc, orcGroup, slime, slimeGroup, spider, spiderGroup;
var playB, pb, stage1, stage2, s1, pb2, gm, gameOver, replay, rePlayIMG;

function preload(){
  bg = loadImage('images/bg.png');
  villager = loadImage('images/Villager.png');
  bow = loadImage('images/Bow.png');
  potion = loadImage('images/Potion.png');
  sword = loadImage('images/Sword.png');
  bomb = loadImage('images/Bomb.png');
  knight = loadImage('images/Knight.png');
  wizard = loadImage('images/Wizard.png');
  archer = loadImage('images/Archer.png');
  zombie =  loadImage('images/zombie.png');
  bombZombie = loadImage('images/bZombie.png');
  bat = loadImage('images/bat.png');
  fireball = loadImage('images/fireball.png');
  knife = loadImage('images/throwing-sword.png');
  arrow = loadImage('images/arrow.png');
  treasure = loadImage('images/treasure.png');
  orc = loadImage('images/orc.png');
  slime = loadImage('images/slime.png');
  spider = loadImage('images/spider.png');
  playB = loadImage('images/play.png');
  stage1 = loadImage('images/stage1.png');
  stage2 = loadImage('images/stage2.png');
  gameOver = loadImage('images/gm.png');
  rePlayIMG = loadImage('images/replay.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  flag = 0;
  score = 0;
  health = 3;
  gameState = "stage0";

  gm = createSprite(width/2, height/2 -100, 20, 20);
  gm.visible = false;
  gm.addImage(gameOver);
  replay = createSprite(width/2, height/2 +100, 20, 20);
  replay.visible = false;
  replay.addImage(rePlayIMG);

  pb = createSprite(width/2, height/2 -20, 20, 20);
  pb.addImage(playB);
  pb.visible = false;
  pb2 = createSprite(width/2, height/2 -20, 20, 20);
  pb2.addImage(playB);
  pb2.visible = false;
  s1 = createSprite(width/2, height/2 -300, 10, 10);
  s1.addImage(stage1);
  s1.scale = 0.5;
  s1.visible = false;

  b1 = createSprite(820, 350, 500, 10);
  b2 = createSprite(300, 470, 500, 10);
  b2.rotation = -25;
  b3 = createSprite(1200, 440, 300, 10);
  b3.rotation = 30;
  b4 = createSprite(1150, 750, 600, 10);
  b4.rotation = -50;
  b5 = createSprite(90, 670, 200, 10);
  b5.rotation = 90;
  b6 = createSprite(240,860,400,10);
  b6.rotation = 40;
  b7 = createSprite(650, 970, 550, 10);
  b1.visible = false;
  b2.visible = false;
  b3.visible = false;
  b4.visible = false;
  b5.visible = false;
  b6.visible = false;
  b7.visible = false;


  player = createSprite(250, height/2, 50, 50);
  player.addImage(villager);
  player.scale = 0.8;
  player.setCollider("rectangle", 0, 0, 50, 100)

  i1 = createSprite(400, 150, 20, 20);
  i1.addImage(bomb);
  i1.scale = 1.5;
  i2 = createSprite(400, 350, 20, 20);
  i2.addImage(potion);
  i2.scale= 1.5;
  i3 = createSprite(400, 550, 20, 20);
  i3.addImage(bow);
  i3.scale = 1.5;
  i4 = createSprite(400, 750, 20, 20);
  i4.addImage(sword);
  i4.scale = 1.5;

  h1 = createSprite(100, 30, 80, 15);
  h1.shapeColor = "red";
  h2 = createSprite(180, 30, 80, 15);
  h2.shapeColor = "red";
  h3 = createSprite(260, 30, 80, 15);
  h3.shapeColor = "red";

  posy1 = Math.round(random(400, 550));
  posy2 = Math.round(random(400, 550));
  posy3 = Math.round(random(400, 550));
  o1 = createSprite(190, posy1, 20, 20);
  o1.addImage(treasure);
  o1.scale = 0.5;
  o2 = createSprite(120, 20, 20, 20);
  o2.addImage(treasure);
  o2.scale = 0.5;
  o2.visible = false;
  o3 = createSprite(50, 20, 20, 20);
  o3.addImage(treasure);
  o3.scale = 0.5;
  o3.visible = false;

  fireballGroup = new Group();
  arrowGroup = new Group();
  knifeGroup = new Group();
  zomGroup = new Group();
  bzomGroup = new Group();
  batGroup = new Group();
  orcGroup = new Group();
  slimeGroup = new Group();
  spiderGroup = new Group();
}

function draw() {
  background(bg);

  if (gameState == "stage0"){
    player.visible = false;
    i1.visible = false;
    i2.visible = false;
    i3.visible = false;
    i4.visible = false;
    o1.visible = false;

    pb.visible = true;
    s1.visible = true;

    if (mousePressedOver(pb)){
      gameState = "stage1";
    }
  }
    
  if (gameState == "stage1"){

    player.visible = true;
    i1.visible = true;
    i2.visible = true;
    i3.visible = true;
    i4.visible = true;
    o1.visible = true;

    pb.visible = false;
    s1.visible = false;

  if (mousePressedOver(i1)){
    player.addImage(wizard);
    player.scale = 1.5;
    flag = 1;
  }
  if (keyWentDown("space") && flag == 1){
    spawnBomb();
  }

  if (mousePressedOver(i3)){
    player.addImage(archer);
    player.scale = 1.5;
    flag = 2;
  }
  if (keyWentDown("space") && flag == 2){
    spawnArrow();
  }

  if (mousePressedOver(i4)){
    player.addImage(knight);
    player.scale = 1.5;
    flag = 3;
  }
  if (keyWentDown("space") && flag == 3){
    spawnKnife();
  }

  if (mousePressedOver(i2) && health == 2){
    h3.shapeColor = "red";
    health = 3;
    i2.destroy();
  }
  if (mousePressedOver(i2) && health == 1){
    h2.shapeColor = "red";
    health = 2;
    i2.destroy();
  }

  if (keyDown('w')){
    player.y = player.y-10;
  }

  if (keyDown('s')){
    player.y = player.y+10;
  }

  if (keyDown('d')){
    player.x = player.x+10;
  }

  if (keyDown('a')){
    player.x = player.x-10;
  }

  if (zomGroup.isTouching(o1) || bzomGroup.isTouching(o1) || batGroup.isTouching(o1)){
    o1.destroy();
    zomGroup.destroyEach();
    bzomGroup.destroyEach();
    batGroup.destroyEach();
    o2.visible = true;
    o2.y = posy2;
    health = health-1;
  }

  if (zomGroup.isTouching(o2) || bzomGroup.isTouching(o2) || batGroup.isTouching(o2)){
    o2.destroy();
    zomGroup.destroyEach();
    bzomGroup.destroyEach();
    batGroup.destroyEach();
    o3.visible = true;
    o3.y = posy3;
    health = health-1;
  }

  if (zomGroup.isTouching(o3) || bzomGroup.isTouching(o3) || batGroup.isTouching(o3)){
    o3.destroy();
    zomGroup.destroyEach();
    bzomGroup.destroyEach();
    batGroup.destroyEach();
    health = health-1;
  }

  if (health == 3){
    h1.shapeColor = "red";
    h2.shapeColor = "red";
    h3.shapeColor = "red";
  }

  if (health == 2){
    h1.shapeColor = "red";
    h2.shapeColor = "red";
    h3.shapeColor = "gray";
  }

  if (health == 1){
    h1.shapeColor = "red";
    h2.shapeColor = "gray";
    h3.shapeColor = "gray";
  }

  if (health == 0){
    h1.shapeColor = "gray";
    h2.shapeColor = "gray";
    h3.shapeColor = "gray";
    gameState = "over";
  }

  player.collide(b1);
  player.collide(b2);
  player.collide(b3);
  player.collide(b4);
  player.collide(b5);
  player.collide(b6);
  player.collide(b7);

  spawnEnemies();

  for (var i=0; i < zomGroup.length; i++){
  if (zomGroup.get(i).isTouching(knifeGroup)){
    zomGroup.get(i).destroy();
    knifeGroup.destroyEach();
    score = score+5;
  }
}

  for (var i=0; i < bzomGroup.length; i++){
    if (bzomGroup.get(i).isTouching(fireballGroup)){
      bzomGroup.get(i).destroy();
      fireballGroup.destroyEach();
      score = score+5;
  }
}

  for (var i=0; i < batGroup.length; i++){
    if (batGroup.get(i).isTouching(arrowGroup)){
      batGroup.get(i).destroy();
      arrowGroup.destroyEach();
      score = score+5;
  }
}
  if (score == 25){
    gameState = "stageA";
  }
}

  if (gameState == "stage2"){

    s1.visible = false;

    player.visible = true;
    i1.visible = true;
    i2.visible = true;
    i3.visible = true;
    i4.visible = true;
    o1.visible = true;
    pb2.visible = false;

    if (mousePressedOver(i1)){
      player.addImage(wizard);
      player.scale = 1.5;
      flag = 1;
    }
    if (keyWentDown("space") && flag == 1){
      spawnBomb();
    }
  
    if (mousePressedOver(i3)){
      player.addImage(archer);
      player.scale = 1.5;
      flag = 2;
    }
    if (keyWentDown("space") && flag == 2){
      spawnArrow();
    }
  
    if (mousePressedOver(i4)){
      player.addImage(knight);
      player.scale = 1.5;
      flag = 3;
    }
    if (keyWentDown("space") && flag == 3){
      spawnKnife();
    }
  
    if (mousePressedOver(i2) && health == 2){
      h3.shapeColor = "red";
      health = 3;
      i2.destroy();
    }
    if (mousePressedOver(i2) && health == 1){
      h2.shapeColor = "red";
      health = 2;
      i2.destroy();
    }
  
    if (keyDown('w')){
      player.y = player.y-10;
    }
  
    if (keyDown('s')){
      player.y = player.y+10;
    }
  
    if (keyDown('d')){
      player.x = player.x+10;
    }
  
    if (keyDown('a')){
      player.x = player.x-10;
    }
  
    if (orcGroup.isTouching(o1) || spiderGroup.isTouching(o1) || slimeGroup.isTouching(o1)){
      o1.destroy();
      orcGroup.destroyEach();
      spiderGroup.destroyEach();
      slimeGroup.destroyEach();
      o2.visible = true;
      o2.y = posy2;
      health = health-1;
    }
  
    if (orcGroup.isTouching(o2) || spiderGroup.isTouching(o2) || slimeGroup.isTouching(o2)){
      o2.destroy();
      orcGroup.destroyEach();
      spiderGroup.destroyEach();
      slimeGroup.destroyEach();
      o3.visible = true;
      o3.y = posy3;
      health = health-1;
    }
  
    if (orcGroup.isTouching(o1) || spiderGroup.isTouching(o1) || slimeGroup.isTouching(o1)){
      o3.destroy();
      orcGroup.destroyEach();
      spiderGroup.destroyEach();
      slimeGroup.destroyEach();
      health = health-1;
    }
  
    if (health == 3){
      h1.shapeColor = "red";
      h2.shapeColor = "red";
      h3.shapeColor = "red";
    }
  
    if (health == 2){
      h1.shapeColor = "red";
      h2.shapeColor = "red";
      h3.shapeColor = "gray";
    }
  
    if (health == 1){
      h1.shapeColor = "red";
      h2.shapeColor = "gray";
      h3.shapeColor = "gray";
    }
  
    if (health == 0){
      h1.shapeColor = "gray";
      h2.shapeColor = "gray";
      h3.shapeColor = "gray";
      gameState = "over";
    }
  
    player.collide(b1);
    player.collide(b2);
    player.collide(b3);
    player.collide(b4);
    player.collide(b5);
    player.collide(b6);
    player.collide(b7);
  
    spawnEnemies2();
  
    for (var i=0; i < orcGroup.length; i++){
    if (orcGroup.get(i).isTouching(knifeGroup)){
      orcGroup.get(i).destroy();
      knifeGroup.destroyEach();
      score = score+5;
    }
  }
  
    for (var i=0; i < slimeGroup.length; i++){
      if (slimeGroup.get(i).isTouching(fireballGroup)){
        slimeGroup.get(i).destroy();
        fireballGroup.destroyEach();
        score = score+5;
    }
  }
  
    for (var i=0; i < spiderGroup.length; i++){
      if (spiderGroup.get(i).isTouching(arrowGroup)){
        spiderGroup.get(i).destroy();
        arrowGroup.destroyEach();
        score = score+5;
    }
  }

  if (score == 50){
    gameState = "over";
  }
}

  if (gameState == "stageA"){
    s1.addImage(stage2);
    s1.visible = true;

    player.visible = false;
    i1.visible = false;
    i2.visible = false;
    i3.visible = false;
    i4.visible = false;
    o1.visible = false;
    pb2.visible = true;

    if (mousePressedOver(pb2)){
      gameState = "stage2";
    }
  }

  if (gameState == "over"){
    player.visible = false;
    i1.visible = false;
    i2.visible = false;
    i3.visible = false;
    i4.visible = false;
    o1.visible = false;

    gm.visible = true;
    replay.visible = true;

    if (mousePressedOver(replay)){
      restart();
    }
  }
  
  drawSprites();
  textSize(25);
  fill("black");
  text("Score- "+score, 60, 70);
  fill("red");
  text("HP", 15, 40);

  player.x = mouseX;
  player.y = mouseY;
  }


function spawnEnemies(){
  if (frameCount%200 == 0){
    posy = Math.round(random(400, 550));
    enemy = createSprite(1350, posy, 30, 30);
    x = Math.round(random(1, 3));
    enemy.velocityX = -2.5;
    if (x == 1){
      enemy.addImage(zombie);
      enemy.scale = 0.7;
      zomGroup.add(enemy);
    }
    if (x == 2){
      enemy.addImage(bombZombie);
      enemy.scale = 0.1;
      bzomGroup.add(enemy);
    }
    if (x == 3){
      enemy.addImage(bat);
      enemy.scale = 0.15;
      batGroup.add(enemy);
    }
    enemy.lifetime = width/2;
  }
}

function spawnEnemies2(){
  if (frameCount%150 == 0){
    posy = Math.round(random(400, 550));
    enemy = createSprite(1350, posy, 30, 30);
    x = Math.round(random(1, 3));
    enemy.velocityX = -(3+(score/10))
    if (x == 1){
      enemy.addImage(orc);
      enemy.scale = 0.8;
      orcGroup.add(enemy);
    }
    if (x == 2){
      enemy.addImage(spider);
      enemy.scale = 0.8;
      spiderGroup.add(enemy);
    }
    if (x == 3){
      enemy.addImage(slime);
      enemy.scale = 0.8;
      slimeGroup.add(enemy);
    }
    enemy.lifetime = width/2;
  }
}

function spawnBomb(){
  var b = createSprite(player.x+10, player.y, 10, 10);
  b.velocityX = 7;
  b.addImage(fireball);
  b.scale = 0.1;
  b.lifetime = width/4;
  fireballGroup.add(b);
}

function spawnArrow(){
  var b = createSprite(player.x+10, player.y, 10, 10);
  b.velocityX = 7;
  b.addImage(arrow);
  b.scale = 0.1;
  b.lifetime = width/4;
  arrowGroup.add(b);
}

function spawnKnife(){
  var b = createSprite(player.x+10, player.y, 10, 10);
  b.velocityX = 7;
  b.addImage(knife);
  b.scale = 1.5;
  b.lifetime = width/4;
  knifeGroup.add(b);
}

function restart(){
  gameState = "stage0";
  health = 3;
  score = 0;
  replay.visible = false;
  gm.visible = false;
  s1.addImage(stage1);
  pb.visible = true;
}