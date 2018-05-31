const DEFAULT_CONFIG = {
  texture: PIXI.Texture.fromImage('img/default_character.png'),
  speed: 100,
  direction: new PIXI.Point(0, 0)
};


export default class Character extends PIXI.Sprite {

  constructor(config) {
    super(DEFAULT_CONFIG.texture);

    this.anchor.set(0.5, 1);
    this._speed = DEFAULT_CONFIG.speed;
    this._direction = DEFAULT_CONFIG.direction;

    this._updateWithConfig(config);
  }

  get speed() {
    return this._speed;
  }

  set speed(value) {
    this._speed = value;
  }

  get direction() {
    return this._direction;
  }

  set direction(point) {
    this._direction = point;
  }

  move() {
    this.position.x += this._direction.x * this.speed;
    this.position.y += this._direction.y * this.speed;
  }

  _updateWithConfig(config = {}) {
    if (config.texture) {
      this.setTexture(config.texture);
    }

    if (config.speed) {
      this.speed = config.speed;
    }

    if (config.direction) {
      this.direction = config.direction;
    }
  }
}
