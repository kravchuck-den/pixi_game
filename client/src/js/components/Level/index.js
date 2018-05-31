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

    this._addTilingSprite();
  }

  addActor(actor) {
    this.addChild(actor);
  }

  _addTilingSprite() {
    const {x, y, width, height} = global.game.screen;
    const texture = PIXI.Texture.fromImage('img/levels/tile_grass.jpg');
    const levelHeight = height * 100;
    console.log(height);
    const tiling = new PIXI.extras.TilingSprite(texture, width, levelHeight);

    tiling.position.y = -levelHeight + height;
    global.game.ticker.add((delta) => {
      tiling.position.y += 3 * delta;
    });

    // const int = setInterval(() => {
    //   tiling.position.y += 2;
    // }, 10);

    // setTimeout(() => {
    //   clearInterval(int);
    // }, 3000);

    this.addChild(tiling);
  }
}
