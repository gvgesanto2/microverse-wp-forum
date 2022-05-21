import { createElem } from '../utils/createElem.js';

const createSpeakerElem = ({
  socialLinkHref,
  socialLinkLabel,
  speakerName,
  speakerProfileInfo,
  speakerRole,
  socialIcon,
  speakerImg,
  speakerImgAlt,
  isHidden,
}) => {
  const speakerElem = createElem({
    tag: 'li',
    className: `o-card ${isHidden ? 'o-card--is-hidden' : ''}`,
  });
  const socialLink = createElem({ tag: 'a', className: 'o-card__left-content' });
  socialLink.ariaLabel = socialLinkLabel;
  socialLink.href = socialLinkHref;
  socialLink.target = '_blank';
  socialLink.rel = 'noopener noreferrer';
  const portrait = createElem({ tag: 'figure', className: 'm-portrait' });
  const portraitImgBox = createElem({
    tag: 'div',
    className: 'm-portrait__img-box',
  });
  const portraitImg = createElem({ tag: 'img', className: 'm-portrait__img' });
  portraitImg.src = speakerImg;
  portraitImg.alt = speakerImgAlt;

  const portraitCaption = createElem({
    tag: 'figcaption',
    className: 'm-portrait__caption',
  });
  portraitCaption.innerHTML = `
    <svg class="a-icon--lg">
      <use xlink:href=${socialIcon}></use>
    </svg>
  `;

  portraitImgBox.appendChild(portraitImg);
  portrait.appendChild(portraitImgBox);
  portrait.appendChild(portraitCaption);
  socialLink.appendChild(portrait);

  const cardRightContent = createElem({ tag: 'div', className: 'o-card__right-content' });
  const cardHeader = createElem({ tag: 'header', className: 'o-card__header' });
  const speakerNameElem = createElem({
    tag: 'h4',
    className: 'a-heading a-heading--sm',
    text: speakerName,
  });
  const speakerRoleElem = createElem({
    tag: 'span',
    className: 'a-text a-text--italic a-text--primary',
    text: speakerRole,
  });
  const speakerProfileInfoElem = createElem({
    tag: 'p',
    className: 'a-text a-text--sm',
    text: speakerProfileInfo,
  });

  cardHeader.appendChild(speakerNameElem);
  cardHeader.appendChild(speakerRoleElem);
  cardRightContent.appendChild(cardHeader);
  cardRightContent.appendChild(speakerProfileInfoElem);

  speakerElem.appendChild(socialLink);
  speakerElem.appendChild(cardRightContent);
  return speakerElem;
};

export default class SpeakersGridView {
  constructor(parentElemId, speakers) {
    this.id = 'speakers-grid';
    this.parentElem = document.getElementById(parentElemId);
    this.speakers = speakers;
  }

  createNodeElem() {
    const speakersGrid = createElem({
      tag: 'ul',
      className: 'l-speakers-grid',
      id: this.id,
    });

    this.speakers.forEach((speaker) => {
      const speakerElem = createSpeakerElem(speaker);

      speakersGrid.appendChild(speakerElem);
    });

    return speakersGrid;
  }

  showAllSpeakers() {
    this.speakers.forEach((speaker) => {
      if (speaker.classList.contains('o-card--is-hidden')) {
        speaker.classList.remove('o-card--is-hidden');
      }
    });
  }

  hideSpeaker(speakerId) {
    this.speakers[speakerId].classList.add('o-card--is-hidden');
  }

  render() {
    const speakersGrid = this.createNodeElem();
    this.parentElem.insertBefore(
      speakersGrid,
      this.parentElem.lastElementChild,
    );
    this.speakers = Object.values(document.getElementById(this.id).children);
  }
}
