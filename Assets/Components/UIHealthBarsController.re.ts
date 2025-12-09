import * as RE from 'rogue-engine';
import CharacterStatus from './CharacterStatus.re';

export default class UIHealthBarsController extends RE.Component {

  get healthBar() {
    return document.querySelector("#health-bar > div") as HTMLDivElement;
  }

  get playerStatus() {
    return RE.getComponentByName("Player") as CharacterStatus;
  }

  HP = 0;

  update() {
    const p1 = this.playerStatus;
    const healthBar = this.healthBar;

    if (!p1 || !healthBar) return;

    if (p1.curHP !== this.HP) this.updateHealthbar(healthBar, p1);

    this.HP = p1.curHP;
  }

  updateHealthbar(healthbar: HTMLDivElement, player: CharacterStatus) {
    healthbar.style.width = ((player.curHP * 100) / player.hp) + "%";
  }
}

RE.registerComponent(UIHealthBarsController);
