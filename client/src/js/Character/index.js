const defaultCharacterTexture = PIXI.Texture.fromImage('img/default_character.png');


export default class Character extends PIXI.Sprite {

  constructor(config) {
    super(defaultCharacterTexture);
    this.anchor.set(0.5, 1);

    this._speed = 1;
    this._directionVector = new PIXI.Point(0, 0);

    this._moveInterval = null;
  }

  get speed() {
    return this._speed;
  }

  set speed(value) {
    this._speed = value;
  }

  move() {
    this.position.x += this._directionVector.x * this.speed;
    this.position.y += this._directionVector.y * this.speed;
  }

  set direction(point) {
    this._directionVector = point;
  }

}
