import { createElem, createElemWithText } from '../utils/createElem.js';

const createProgramItemElem = ({
  imgSrc, imgAlt, title, description,
}) => {
  const programItem = createElem({ tag: 'li', className: 'm-program-card' });
  const itemImg = createElem({ tag: 'img', className: 'm-program-card__img' });
  itemImg.src = imgSrc;
  itemImg.alt = imgAlt;
  const itemTitle = createElemWithText({
    tag: 'h4',
    className:
      'a-heading a-heading--sm a-heading--primary m-program-card__title',
    text: title,
  });
  const itemDescription = createElemWithText({
    tag: 'p',
    className: 'a-text a-text--light m-program-card__text',
    text: description,
  });
  programItem.appendChild(itemImg);
  programItem.appendChild(itemTitle);
  programItem.appendChild(itemDescription);
  return programItem;
};

export default class ProgramItemsListView {
  constructor(parentElemId, programItems) {
    this.parentElem = document.getElementById(parentElemId);
    this.programItems = programItems;
  }

  createNodeElem() {
    const programItemsList = createElem({
      tag: 'ul',
      className: 'o-simple-list',
    });

    this.programItems.forEach((programItem) => {
      const programItemElem = createProgramItemElem(programItem);

      programItemsList.appendChild(programItemElem);
    });

    return programItemsList;
  }

  render() {
    const programItemsList = this.createNodeElem();
    this.parentElem.insertBefore(
      programItemsList,
      this.parentElem.lastElementChild,
    );
  }
}
