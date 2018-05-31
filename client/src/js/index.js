import '../styles/index.css';

import Character from './Character';
import Controls from './Controls';
import Game from './Game';


const game = new Game(800, 600, {backgroundColor : 0xddeedd});
window.game = game;
const appHtmlContainer = document.getElementById('app');
appHtmlContainer.appendChild(game.view);

game.onLoad(onGameLoadListener);

function onGameLoadListener() {

  const player = new Character();
  game.store.currentCharacter = player;
  new Controls();

  // player.controls = new Controls(player);

  player.speed = 4;

  player.x = game.screen.width / 2;
  player.y = game.screen.height / 2;

  game.stage.addChild(player);

}