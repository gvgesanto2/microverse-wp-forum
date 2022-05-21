import HamburgerMenuController from './controllers/HamburgerMenuController.js';
import ProgramItemController from './controllers/ProgramItemController.js';
import SpeakerController from './controllers/SpeakerController.js';
import homepageMetaData from './data/homepage.data.js';
import programSectionItems from './data/program-section-items.data.js';
import speakers from './data/speakers.data.js';
import hamburgerMenuMetaData from './data/hamburger-menu.data.js';

const { programSectionId, speakersSectionId, speakersSectionBtnId } = homepageMetaData;

const programItemController = new ProgramItemController(programSectionId, programSectionItems);
programItemController.buildProgramItemsList();

const speakerController = new SpeakerController(speakersSectionId, speakersSectionBtnId, speakers);
speakerController.buildSpeakersGrid();

const hamburgerMenuController = new HamburgerMenuController(hamburgerMenuMetaData);
hamburgerMenuController.initHamburgerMenu();
