function Game(){
    // Pixi renderer creation.
    this.renderer = new PIXI.WebGLRenderer(512, 384);

    // Appending the renderer's view to the body.
    document.body.appendChild(this.renderer.view);

    // Creating a Pixi container.
    this.stage = new PIXI.Container();

    this.scroller = new Scroller(this.stage);

    // Call animation frame when browser is ready.
    requestAnimationFrame(this.update.bind(this));
}

Game.SCROLL_SPEED = 5;

Game.prototype.update = function() {
  this.scroller.moveViewportXBy(Game.SCROLL_SPEED);
  this.renderer.render(this.stage);
  requestAnimationFrame(this.update.bind(this));
}

var game = new Game();


// if left then
  // far.tilePosition.x += 0.128;
  // mid.tilePosition.x += 0.64;

// if right then
  // far.tilePosition.x -= 0.128;
  // mid.tilePosition.x -= 0.64;