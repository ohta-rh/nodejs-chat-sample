//player
(function(window){

  Player.prototype = new Shape();
  Player.prototype._parentInitialize = Player.prototype.initialize;
  Player.prototype._parentTick = Player.prototype._tick;

  function Player(prop){
    this.initialize(prop);
  }

  Player.prototype.initialize = function(prop) {
    //描画設定
  }

  Player.prototype._tick = function(){
    this._parentTick();
  }

  window.Player = Player;
}(window));
