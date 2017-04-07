function Sprite(){
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.color = "blue";
  this.width = 15;
  this.height = 15;
}

Sprite.prototype.desenhar = function(ctx){
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.angle*2*Math.PI/360);
  ctx.fillStyle = this.color;
  ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
  ctx.strokeStyle = "blzck";
  ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height);
  ctx.restore();
};

Sprite.prototype.mover = function(dt){
  this.vx = this.vx + this.ax*dt;
  this.vy = this.vy + (this.ay+30)*dt;
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
};

Sprite.prototype.win = function(alvo){
  if(this.x+this.width < alvo.x) return false;
  if(this.x > alvo.x+this.width) return false;
  if(this.y+this.height < alvo.y) return false;
  if(this.y > alvo.y+this.height) return false;
  return true;
};

Sprite.prototype.stop = function(x,y){
  this.ax = 0;
  this.ay = 0;
  this.x  = x -1;
  this.y  = y -1;
}
