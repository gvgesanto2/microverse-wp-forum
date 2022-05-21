import HamburgerMenuViewManager from '../views/HamburgerMenuViewManager.js';

export default class HamburgerMenuController {
  constructor({
    hamburgerMenuId,
    hamburgerBtnId,
    hamburguerMenuLinksSelector,
  }) {
    this.hamburgerMenuViewManager = new HamburgerMenuViewManager(
      hamburgerMenuId,
      hamburgerBtnId,
      hamburguerMenuLinksSelector,
    );
  }

  initHamburgerMenu() {
    this.hamburgerMenuViewManager.addEventHandlerToMenuBtn(() => {
      this.hamburgerMenuViewManager.toggle();
    });
    this.hamburgerMenuViewManager.addEventHandlerToMenuLinks(() => {
      this.hamburgerMenuViewManager.hide();
    });
  }
}
