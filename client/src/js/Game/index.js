import Store from '../Store';

export default class Game extends PIXI.Application{

  constructor(...args) {
    super(...args);

    this.characters = [];
    this.currentCharacter = null;
    this.constants = {};


    this.store = new Store();
    this._onLoadListener = null;

    this.loadResources();
  }

  async loadResources() {
    await new Promise(resolve => {setTimeout(resolve, 100)});

    if (typeof this._onLoadListener === 'function') {
      this._onLoadListener(this);
    }
  }

  onLoad(listener) {
    this._onLoadListener = listener;
  }

}