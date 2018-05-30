import * as PIXI from 'pixi.js';
import '../styles/index.css';

import Character from './Character';

const app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
const appHtmlContainer = document.getElementById('app');
appHtmlContainer.appendChild(app.view);

const player = new Character();
player.speed = 2;

player.x = app.screen.width / 2;
player.y = app.screen.height / 2;

app.stage.addChild(player);

// setInterval(() => {
//   player.position.x += 2;
// }, 300);

window.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 87: // Top
      player.startVerticalMove(-1);
      break;
    case 83: // Bottom
      player.startVerticalMove(1);
      break;
    case 65: // Left
      player.startHorizontalMove(-1);
      break;
    case 68: // Bottom
      player.startHorizontalMove(1);
      break;
  }
});

window.addEventListener('keyup', (e) => {
  switch (e.keyCode) {
    case 87: // Top
      player.stopVerticalMove(-1);
      break;
    case 83: // Bottom
      player.stopVerticalMove(1);
      break;
    case 65: // Left
      player.stopHorizontalMove(-1);
      break;
    case 68: // Bottom
      player.stopHorizontalMove(1);
      break;
  }
});
app.ticker.add(function(delta) {
  // const sign = Math.random() > 0.5 ? -1 : 1;
  // player.position.y += sign;
  // player.position.x += delta;
});
