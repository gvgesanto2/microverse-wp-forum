import { addEventHandler } from '../utils/event-handler.js';

export default class SpeakersSectionBtnViewManager {
  constructor(speakersSectionBtnId) {
    this.id = speakersSectionBtnId;
    this.speakersSectionBtn = document.getElementById(this.id);
  }

  addEventHandler(callback) {
    addEventHandler(this.id, 'click', callback);
  }

  setStateToActive() {
    this.speakersSectionBtn.ariaLabel = 'Show less';
    Object.values(this.speakersSectionBtn.children).forEach((childElem) => {
      if (childElem.nodeName === 'SPAN') {
        childElem.innerHTML = 'less';
      } else if (childElem.nodeName === 'svg') {
        childElem.innerHTML = '<use xlink:href="src/assets/images/icons/sprite.svg#chevron-up"></use>';
      }
    });
  }

  setStateToDefault() {
    this.speakersSectionBtn.ariaLabel = 'Show more';
    Object.values(this.speakersSectionBtn.children).forEach((childElem) => {
      if (childElem.nodeName === 'SPAN') {
        childElem.innerHTML = 'more';
      } else if (childElem.nodeName === 'svg') {
        childElem.innerHTML = '<use xlink:href="src/assets/images/icons/sprite.svg#chevron-down"></use>';
      }
    });
  }
}
