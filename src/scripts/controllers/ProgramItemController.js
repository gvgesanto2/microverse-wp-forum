import ProgramItemsListView from '../views/ProgramItemsListView.js';

export default class ProgramItemController {
  constructor(programSectionId, programItems) {
    this.programSectionId = programSectionId;
    this.programItems = programItems;
  }

  buildProgramItemsList() {
    const programItemsListView = new ProgramItemsListView(
      this.programSectionId,
      this.programItems,
    );
    programItemsListView.render();
  }
}
