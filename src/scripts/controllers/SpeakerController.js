import SpeakersGridView from '../views/SpeakersGridView.js';
import SpeakersSectionBtnViewManager from '../views/SpeakersSectionBtnViewManager.js';

export default class SpeakerController {
  constructor(speakersSectionId, speakersSectionBtnId, speakers) {
    this.speakersSectionId = speakersSectionId;
    this.speakers = speakers;
    this.speakersSectionBtnId = speakersSectionBtnId;
    this.allSpeakersShowed = false;
  }

  buildSpeakersGrid() {
    const speakersGridView = new SpeakersGridView(
      this.speakersSectionId,
      this.speakers.map((speaker, index) => {
        if (index < 2) {
          return { ...speaker, isHidden: false };
        }
        return { ...speaker, isHidden: true };
      }),
    );
    speakersGridView.render();
    const speakersSectionBtnViewManager = new SpeakersSectionBtnViewManager(
      this.speakersSectionBtnId,
    );

    speakersSectionBtnViewManager.addEventHandler(() => {
      if (this.allSpeakersShowed) {
        for (let i = 2; i < this.speakers.length; i += 1) {
          speakersGridView.hideSpeaker(i);
        }
        speakersSectionBtnViewManager.setStateToDefault();
        this.allSpeakersShowed = false;
      } else {
        speakersGridView.showAllSpeakers();
        speakersSectionBtnViewManager.setStateToActive();
        this.allSpeakersShowed = true;
      }
    });
  }
}
