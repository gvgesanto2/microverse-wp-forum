import HamburgerMenuController from './controllers/HamburgerMenuController.js';
import hamburgerMenuMetaData from './data/hamburger-menu.data.js';

const hamburgerMenuController = new HamburgerMenuController(hamburgerMenuMetaData);
hamburgerMenuController.initHamburgerMenu();
