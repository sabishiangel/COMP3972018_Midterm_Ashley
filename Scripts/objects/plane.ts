module objects {
  export class Plane extends objects.GameObject {
    // private instance variables


    // public properties
    public planeFlash: objects.PlaneFlash;

    // Constructor
    constructor() {
      super("plane");
      this.Start();
    }

    // private methods
    private _animationEnded():void {
      if(this.alpha == 0) {
        this.alpha = 1;
        this.planeFlash.alpha = 0;
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this.planeFlash = new objects.PlaneFlash();
      this.planeFlash.alpha = 1;
      this.planeFlash.on("animationend", this._animationEnded.bind(this), false );

      if(managers.Game.currentScene == config.Scene.PLAY){
        this.x = 320;
        this.y = 430;
          }   
       else if(managers.Game.currentScene == config.Scene.LEVEL2){
        this.x = 50;
        this.y = 230;
        this.rotation = 90;
        }


    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset():void {

    }

    // move the object to some new location
    public Move():void {
     // mouse controls
     // this.x = objects.Game.stage.mouseX;

     // keyboard controls
     this.planeFlash.x = this.x;
     this.planeFlash.y = this.y;

     if(managers.Game.currentScene == config.Scene.LEVEL2){
      this.planeFlash.rotation = 90;
      }
     
     if(managers.Game.currentScene == config.Scene.PLAY){
      if(managers.Game.keyboardManager.moveLeft) {
        this.x -= 5;
      }
      if(managers.Game.keyboardManager.moveRight) {
        this.x += 5;
      }
        }   
     else if(managers.Game.currentScene == config.Scene.LEVEL2){
          if(managers.Game.keyboardManager.moveForward) {
            this.y -= 5;
          }
          if(managers.Game.keyboardManager.moveBackward) {
            this.y += 5;
          }
      }

  
    }

    

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // right boundary
      if(this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }

      // left boundary
      if(this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }

      // down boundary
      if(this.y >= 480 - this.halfHeight) {
        this.y = 480 - this.halfHeight;
      }

      // up boundary
      if(this.y <= this.halfHeight) {
        this.y = this.halfHeight;
      }
    }
  }
}
