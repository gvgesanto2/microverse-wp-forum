import { addEventHandlerToElemGroup } from '../utils/event-handler.js';

export default class HamburgerMenuViewManager {
  constructor(hamburgerMenuId, hamburgerBtnId, hamburguerMenuLinksSelector) {
    this.hamburgerMenu = document.getElementById(hamburgerMenuId);
    this.hamburgerBtn = document.getElementById(hamburgerBtnId);
    this.hamburguerMenuLinksSelector = hamburguerMenuLinksSelector;
    this.isCloseBtn = false;
  }

  addEventHandlerToMenuBtn(callback) {
    this.hamburgerBtn.addEventListener('click', callback);
  }

  addEventHandlerToMenuLinks(callback) {
    addEventHandlerToElemGroup(this.hamburguerMenuLinksSelector, 'click', callback);
  }

  toggle() {
    this.hamburgerMenu.classList.toggle('o-hamburger-menu--is-active');
    this.isCloseBtn = !this.isCloseBtn;
    if (this.isCloseBtn) {
      this.hamburgerBtn.ariaLabel = 'Close navigation menu';
    } else {
      this.hamburgerBtn.ariaLabel = 'Open navigation menu';
    }
  }

  show() {
    this.hamburgerMenu.classList.add('o-hamburger-menu--is-active');
    this.hamburgerBtn.ariaLabel = 'Open navigation menu';
    this.isCloseBtn = true;
  }

  hide() {
    if (this.hamburgerMenu.classList.contains('o-hamburger-menu--is-active')) {
      this.hamburgerMenu.classList.remove('o-hamburger-menu--is-active');
      this.isCloseBtn = false;
      this.hamburgerBtn.ariaLabel = 'Close navigation menu';
    }
  }
}
