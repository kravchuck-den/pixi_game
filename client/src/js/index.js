import * as PIXI from 'pixi.js';
import '../styles/index.css';

import Character from './Character';
import Controls from './Controls';

const app = new PIXI.Application(800, 600, {backgroundColor : 0xddeedd});
const appHtmlContainer = document.getElementById('app');
appHtmlContainer.appendChild(app.view);

const player = new Character();
player.controls = new Controls(player);

// player.speed = 2;
setTimeout(() => {player.speed = 10}, 1000);

player.x = app.screen.width / 2;
player.y = app.screen.height / 2;

app.stage.addChild(player);

app.ticker.add(function(delta) {
  // const sign = Math.random() > 0.5 ? -1 : 1;
  // player.position.y += sign;
  // player.position.x += delta;
});
