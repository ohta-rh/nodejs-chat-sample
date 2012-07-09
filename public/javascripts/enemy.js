//enemy
(function(window){

  Enemy.prototype = new Shape();
  Enemy.prototype._parentInitialize = Enemy.prototype.initialize;
  Enemy.prototype._parentTick = Enemy.prototype._tick;

  function Enemy(prop){
    circle = this.initialize();
    circle.graphics.beginFill("#FF0000");
    circle.graphics.beginFill("black");
    circle.graphics.setStrokeStyle(8);
    circle.graphics.beginStroke("#0000FF");
    circle.graphics.beginStroke("white");
    circle.graphics.drawCircle(0,0,73);
    circle.alpha = 0.3;
    circle.graphics.endFill();
    circle.onClick = function(e){
      stg = this.getStage();
      //TODO:やられアニメーション
      stg.removeChild(this);
    }

    return circle;
  }

  Enemy.prototype.initialize = function() {
    this._parentInitialize();
    hoge = new Shape();
    return hoge;
  }

  Enemy.prototype._tick = function(){
    this._parentTick();
  }


  window.Enemy = Enemy;
}(window));
