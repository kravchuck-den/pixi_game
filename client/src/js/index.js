const GAME_HTML_CONTAINER_ID = 'app';

import '../styles/index.css';

import Game         from 'Game';
import Character    from 'components/Character';
import Level        from 'components/Level';
import LevelManager from 'LevelManager';
import Controls     from 'Controls';
import global       from 'Global';


createGame();
setupControls();

createDefaultPlayer();
loadMenuLevel();

let fps = 0;
let date = Date.now();
global.game.ticker.add(delta => {
  const optimalMs = 1000 / 60;
  const deltaTime = delta * optimalMs;
  // let newDate = Date.now();
  // console.log(newDate - date);
  // date = newDate;
  const newFps = 1000 / deltaTime;
  fps = (fps + newFps) / 2;
});

setInterval(() => {
  console.clear();
  console.log(fps);
}, 300);


global.currentLevel.addActor(global.player);
global.player.x = global.game.screen.width / 2;
global.player.y = global.game.screen.height;
global.controls.init();

// console.log(global.game);
// console.log(global.game.scene);
// global.game.stage.addChild(global.player);





function createGame() {
  const game = new Game(800, 600, {backgroundColor : 0xddeedd});

  const appHtmlContainer = document.getElementById(GAME_HTML_CONTAINER_ID);
  appHtmlContainer.appendChild(game.view);

  global.add('game', game);
}

function createDefaultPlayer() {
  const playerConfig = {
    speed: 7,
  };
  const player = new Character(playerConfig);
  global.add('player', player);
}

function setupControls() {
  const controls = new Controls();

  global.add('controls', controls);
}

function loadMenuLevel() {
  const level = new Level({background: '0x33ffdd'});
  LevelManager.add('menu', level);
  LevelManager.load('menu');

  global.add('currentLevel', LevelManager.getCurrentLevel());
}
