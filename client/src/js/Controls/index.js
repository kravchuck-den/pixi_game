const optimalFPS = 1000 / 60;
console.log(optimalFPS);

export default class Controls {

  constructor(character) {
    this._mappingScheme = {
      moveTop: 87,
      moveBottom: 83,
      moveLeft: 65,
      moveRight: 68,
      jump: 32
    };
    this._pressedKeys = [];
    this._moveInterval = null;

    this._character = character;

    this._setupListeners();
  }

  _setupListeners() {
    // TODO: think about code below
    // const isAlreadyPressed = (keyCode) => {
    //   return (this._pressedKeys.indexOf(keyCode) !== -1);
    // };

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
        case this._mappingScheme.moveTop:
          resultDirection.y += -1;
          break;
        case this._mappingScheme.moveBottom:
          resultDirection.y += 1;
          break;
        case this._mappingScheme.moveLeft:
          resultDirection.x += -1;
          break;
        case this._mappingScheme.moveRight:
          resultDirection.x += 1;
          break;
      }
    });

    this._character.direction = resultDirection;

    clearInterval(this._moveInterval);
    this._moveInterval = setInterval(() => this._character.move(), optimalFPS);
  }
}
