const defaultCharacterTexture = PIXI.Texture.fromImage('img/default_character.png');


export default class Character extends PIXI.Sprite {

  constructor(config) {
    super(defaultCharacterTexture);
    this.anchor.set(0.5, 1);

    this._speed = 1;
    this.horizontalMoveInterval = null;
    this.verticalMoveInterval = null;

    // this.texture = PIXI.Texture.fromImage('img/default_character.png');


    // this.controls = new Controls();
  }

  get speed() {
    return this._speed;
  }

  set speed(value) {
    this._speed = value;
  }

  startHorizontalMove(direction) {
    console.log(this.horizontalMoveInterval);
    if (this.horizontalMoveInterval) {
      return;
    }

    const moveWithSpeed = () => {
      this.position.x += direction * this.speed;
    };
    this.horizontalMoveInterval = setInterval(moveWithSpeed, 10);
  }

  stopHorizontalMove() {
    clearInterval(this.horizontalMoveInterval);
    this.horizontalMoveInterval = null;
  }

  startVerticalMove(direction) {
    if (this.verticalMoveInterval) {
      return;
    }

    const moveWithSpeed = () => {
      this.position.y += direction * this.speed;
    };
    this.verticalMoveInterval = setInterval(moveWithSpeed, 10);
  }

  stopVerticalMove() {
    clearInterval(this.verticalMoveInterval);
    this.verticalMoveInterval = null;
  }

}
