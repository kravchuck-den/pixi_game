import global from 'Global';


export default class Level extends PIXI.Container{

  constructor(config) {
    super();

    this._config = {
      background: '0xff44ff',
    };

    this._config = {
      ...this._config,
      ...config
    };

    this.position.x = 10;
    this.position.y = 10;

    this._drawRect();
  }

  _drawRect() {
    const {x, y, width, height} = global.game.screen;
    const graph = new PIXI.Graphics();

    graph.beginFill(this._config.background);
    graph.drawRect(x, y, width - 20, height - 20);
    graph.endFill();

    this.addChild(graph);
  }

  addActor(actor) {
    this.addChild(actor);
  }
}
