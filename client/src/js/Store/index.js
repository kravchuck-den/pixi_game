export default class Store {

  constructor() {
    this._currentCharacter = null;
  }

  set currentCharacter(character) {
    this._currentCharacter = character;
  }

  get currentCharacter() {
    return this._currentCharacter;
  }

  update(prop, value) {
    if (!(prop in this)) {
      console.error(`Store: update(): Property ${prop} does not exist`);
      return;
    }

    this[prop] = value;
  }
}