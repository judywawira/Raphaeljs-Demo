(function() {
  var canvasDisplay;
  window.canvasDisplay = canvasDisplay = (function() {
    function canvasDisplay(canvas) {
      this.paper = Raphael(0, 0, canvas.width(), canvas.height());
      this.glow = "";
      this.linkHover = false;
    }
    canvasDisplay.prototype.newModule = function(e) {
      var item;
      return item = new module(this, e);
    };
    canvasDisplay.prototype.newDataSink = function(e) {
      var item;
      return item = new dataSink(this, e);
    };
    canvasDisplay.prototype.setGlow = function(c) {
      if (this.glow !== "") {
        this.glow.remove();
      }
      return this.glow = c.glow();
    };
    canvasDisplay.prototype.setHover = function() {
      this.linkHover = true;
      return console.log("hover SET");
    };
    canvasDisplay.prototype.unsetHover = function() {
      this.linkHover = false;
      return console.log("hover unSET");
    };
    canvasDisplay.prototype.isHover = function() {
      return this.linkHover;
    };
    return canvasDisplay;
  })();
}).call(this);
