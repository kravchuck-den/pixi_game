const optimalFPS = 1000 / 60;
console.log(optimalFPS);

import {
  KEY_MOVE_TOP,
  KEY_MOVE_BOTTOM,
  KEY_MOVE_LEFT,
  KEY_MOVE_RIGHT
} from '../constants';


export default class Controls {

  constructor(character) {
    this._mappingScheme = {
      [KEY_MOVE_TOP]: 87,
      [KEY_MOVE_BOTTOM]: 83,
      [KEY_MOVE_LEFT]: 65,
      [KEY_MOVE_RIGHT]: 68
    };
    this._pressedKeys = [];
    this._moveInterval = null;

    this._character = character;

    console.warn('game', game);

    this._setupListeners();
  }

  get mappingScheme() {
    return this._mappingScheme;
  }

  set mappingScheme(scheme) {
    this._mappingScheme = {
      ...this._mappingScheme,
      ...scheme
    }
  }

  _setupListeners() {
    window.addEventListener('keydown', (e) => {
      const codeIndex = this._pressedKeys.indexOf(e.keyCode);
      if (codeIndex !== -1) {
        return;
      }

      this._pressedKeys.push(e.keyCode);
      this._updateMove();
    });

    window.addEventListener('keyup', (e) => {
      const codeIndex = this._pressedKeys.indexOf(e.keyCode);
      if (codeIndex === -1) {
        return;
      }

      this._pressedKeys.splice(codeIndex, 1);
      this._updateMove();
    });
  }

  _updateMove() {
    const resultDirection = new PIXI.Point(0, 0);
    
    this._pressedKeys.forEach(key => {
      switch (key) {
        case this._mappingScheme[KEY_MOVE_TOP]:
          resultDirection.y += -1;
          break;
        case this._mappingScheme[KEY_MOVE_BOTTOM]:
          resultDirection.y += 1;
          break;
        case this._mappingScheme[KEY_MOVE_LEFT]:
          resultDirection.x += -1;
          break;
        case this._mappingScheme[KEY_MOVE_RIGHT]:
          resultDirection.x += 1;
          break;
      }
    });

    this._character.direction = resultDirection;

    clearInterval(this._moveInterval);
    this._moveInterval = setInterval(() => this._character.move(), optimalFPS);
  }
}
