import global from 'Global';


import {
  KEY_MOVE_TOP,
  KEY_MOVE_BOTTOM,
  KEY_MOVE_LEFT,
  KEY_MOVE_RIGHT
} from '../constants';


export default class Controls {

  constructor() {

    this._mappingScheme = {
      [KEY_MOVE_TOP]: 87,
      [KEY_MOVE_BOTTOM]: 83,
      [KEY_MOVE_LEFT]: 65,
      [KEY_MOVE_RIGHT]: 68
    };

    this._pressedKeys = [];
    this._moveInterval = null;

    this._keydownListener = this._keydownListener.bind(this);
    this._keyupListener = this._keyupListener.bind(this);
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

  init() {
    window.addEventListener('keydown', this._keydownListener);
    window.addEventListener('keyup', this._keyupListener);
  }

  destroy() {
    window.removeEventListener('keydown', this._keydownListener);
    window.removeEventListener('keyup', this._keyupListener);
    this._pressedKeys = [];
    this._updateMove();
  }

  _keydownListener(e) {
    const codeIndex = this._pressedKeys.indexOf(e.keyCode);
    if (codeIndex !== -1) {
      return;
    }

    this._pressedKeys.push(e.keyCode);
    this._updateMove();
  }

  _keyupListener(e) {
    const codeIndex = this._pressedKeys.indexOf(e.keyCode);
    if (codeIndex === -1) {
      return;
    }

    this._pressedKeys.splice(codeIndex, 1);
    this._updateMove();
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

    clearInterval(this._moveInterval);

    if (!global.player) {
      return;
    }

    global.player.direction = resultDirection;

    if (resultDirection.x === 0 && resultDirection.y === 0) {
      return;
    }

    this._moveInterval = setInterval(() => global.player.move(), 16);
  }
}
