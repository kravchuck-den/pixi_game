import global from 'Global';


class LevelManager {

  constructor() {
    this._levels = {};
    this._currentLevelName = null;
  }

  add(name, level) {
    if (name in this._levels) {
      console.error(`LevelManager: add(): level with name ${name} is already exist in levels list`);
      return;
    }

    this._levels[name] = level;
  }

  remove(name) {
    if (name in this._levels) {
      delete this._levels[name];
    }
  }

  load(name) {
    const level = this._levels[name];

    if (!level) {
      console.error(`LevelManager: load(): level with name ${name} doesn't exist in levels list`);
      return;
    }

    global.game.stage.removeChildren();
    global.game.stage.addChild(level);

    this._currentLevelName = name;
  }

  getCurrentLevel() {
    return this._levels[this._currentLevelName];
  }
}

export default new LevelManager();
