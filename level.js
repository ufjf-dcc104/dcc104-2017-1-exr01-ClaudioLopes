function level(){
  this.sprites = [];
  this.inimigos = 3;
}

level.prototype.init = function(){
  for(var i = 0; i < this.inimigos; i++){
    var inimigo = new Sprite();
    inimigo.x = 120+20*i;
    inimigo.y = 10;
    inimigo.width = 10+i*5;
    inimigo.height = 10+i*5;
    inimigo.vang = 300*i;
    inimigo.am = 10;
    this.sprites.push(inimigo);
  }
};

level.prototype.mover = function (dt){
  for(var i = 0; i < this.sprites.length; i++){
    this.sprites[i].mover(dt);
  }
};

level.prototype.moverAng = function (dt){
  for(var i = 0; i < this.sprites.length; i++){
    this.sprites[i].moverAng(dt);
  }
};


level.prototype.desenhar = function (ctx){
  for(var i = 0; i < this.sprites.length; i++){
    this.sprites[i].desenhar(ctx);
  }
};

level.prototype.colidiuCom = function (alvo,resolveColisao){
  for(var i = 0; i < this.sprites.length; i++){
    if(this.sprites[i].colidiuCom(alvo)){
      resolveColisao(this.sprites[i], alvo);
    }
  }
};

level.prototype.perseguir = function (alvo){
  for(var i = 0; i < this.sprites.length; i++){
    this.sprites[i].perseguir(alvo,dt);
    }
};

level.prototype.perseguirAng = function (alvo){
  for(var i = 0; i < this.sprites.length; i++){
    this.sprites[i].perseguirAng(alvo,dt);
    }
};
